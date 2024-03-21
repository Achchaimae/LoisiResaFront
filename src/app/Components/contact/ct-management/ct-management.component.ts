import { Component, OnInit } from '@angular/core';
import { ActivityService } from 'src/app/core/service/activity.service';
import { ActivityRespDTO } from 'src/app/core/model/ActivityRespDTO.model';
import { ClubService } from 'src/app/core/service/club.service';
import { ClubRespDTO } from 'src/app/core/model/ClubResp.model';

@Component({
  selector: 'app-ct-management',
  templateUrl: './ct-management.component.html',
  styleUrls: ['./ct-management.component.css']
})
export class CtManagementComponent {
  activities: ActivityRespDTO[] = [];
  clubId!: number; // Definite assignment assertion
  club: ClubRespDTO | undefined;
  guides: any[] = [];
  isShowGalerie : boolean = false;

  constructor(private activityService: ActivityService, private clubService: ClubService) { }

  ngOnInit(): void {
    this.clubId = Number(localStorage.getItem('club_id')) || 10; // Assuming 'club_id' is stored as a string
    this.getActivitiesByClubId();
    this.getClubDetails(this.clubId);
  }

  getActivitiesByClubId(): void {
    if (this.clubId) {
      this.activityService.getActivitiesByClubId(this.clubId, 0) // Assuming you want the first page
        .subscribe(
          (data: any) => {
            this.activities = data.content; // Assuming your response contains a 'content' property with the activities
           
          },
          error => {
            console.error('Error fetching activities:', error);
          }
        );
    } else {
      console.error('Club ID not found in storage.');
    }
  }
 
  getClubDetails(clubId: number): void {
    this.clubService.getClubById(clubId) // Assuming you have a method to get club details by ID
      .subscribe(
        (data: any) => {
          this.club = data;
          this.guides = this.club?.guides || []; // Assuming guides are nested inside clubDetails
          
        },
        error => {
          console.error('Error fetching club details:', error);
        }
      );
  }
  closeGalerie()
  {
    this.isShowGalerie = false;
    this.getClubDetails(this.clubId);
  }
}