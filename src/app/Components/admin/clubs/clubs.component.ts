import { Component } from '@angular/core';
import { ClubRespDTO } from 'src/app/core/model/ClubResp.model';
import { ClubService } from 'src/app/core/service/club.service';

@Component({
  selector: 'app-clubs',
  templateUrl: './clubs.component.html',
  styleUrls: ['./clubs.component.css']
})
export class ClubsComponent {

  pendingClubs: ClubRespDTO[] = []; 

  constructor(private clubService: ClubService) { } 

  ngOnInit(): void {
    this.getPendingClubs(0); 
    
  }

  getPendingClubs(page: number): void {
    this.clubService.getPendingClubs(page)
      .subscribe(
        (response: any) => {
          this.pendingClubs = response.content;
  
          console.log('Pending Clubs:', this.pendingClubs[0]); 
        },
        (error) => {
          console.error('Error fetching pending clubs:', error); 
        }
      );
  }
  acceptClubRequest(clubId: number): void {
    this.clubService.acceptRequest(clubId)
      .subscribe((response: ClubRespDTO) => {
        console.log('Club accepted:', response);
        // Handle success response
      }, (error) => {
        console.error('Error accepting club:', error);
        // Handle error response
      });
  }

  refuseClubRequest(clubId: number): void {
    this.clubService.refuseRequest(clubId)
      .subscribe((response: ClubRespDTO) => {
        console.log('Club refused:', response);
        // Handle success response
      }, (error) => {
        console.error('Error refusing club:', error);
        // Handle error response
      });
  }
  
  
}
