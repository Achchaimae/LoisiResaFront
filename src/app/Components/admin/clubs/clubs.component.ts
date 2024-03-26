import { Component } from '@angular/core';
import { ClubRespDTO } from 'src/app/core/model/ClubResp.model';
import { AuthService } from 'src/app/core/service/auth.service';
import { ClubService } from 'src/app/core/service/club.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-clubs',
  templateUrl: './clubs.component.html',
  styleUrls: ['./clubs.component.css']
})
export class ClubsComponent {

  pendingClubs: ClubRespDTO[] = []; 

  constructor(private clubService: ClubService , public authService : AuthService) { } 

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
        Swal.fire('Success', 'Club request accepted successfully!', 'success');
        // Handle success response
      }, (error) => {
        console.error('Error accepting club:', error);
        Swal.fire('Error', 'Failed to accept club request!', 'error');
        // Handle error response
      });
  }

  refuseClubRequest(clubId: number): void {
    this.clubService.refuseRequest(clubId)
      .subscribe((response: ClubRespDTO) => {
        console.log('Club refused:', response);
        Swal.fire('Success', 'Club request refused successfully!', 'success');
        // Handle success response
      }, (error) => {
        console.error('Error refusing club:', error);
        Swal.fire('Error', 'Failed to refuse club request!', 'error');
        // Handle error response
      });
  }
  
  
}
