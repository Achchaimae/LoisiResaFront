import { Component } from '@angular/core';
import { ClubRespDTO } from 'src/app/core/model/ClubResp.model';
import { GuideRespDTO } from 'src/app/core/model/GuideRespDTO.model';
import { AuthService } from 'src/app/core/service/auth.service';
import { ClubService } from 'src/app/core/service/club.service';
import { GuideService } from 'src/app/core/service/guide.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ct-club',
  templateUrl: './ct-club.component.html',
  styleUrls: ['./ct-club.component.css']
})
export class CtClubComponent {
  acceptedClub: ClubRespDTO | undefined;
  guides:GuideRespDTO[]=[];
  isShowAddGuide : boolean = false;
  isShowAddActivity :boolean = false
  constructor(private clubService: ClubService,public authService:AuthService, public guideService :GuideService) {}

  ngOnInit(): void {
    this.getAcceptedClubByOwner();
    this.getGuides();
  }

  getAcceptedClubByOwner() {
    const authUser = this.authService.getAuthUser();
    if (authUser && authUser.id) {
      this.clubService.getAcceptedClubByOwner(authUser.id).subscribe(
        (club: ClubRespDTO) => {
          this.acceptedClub = club;
          console.log('Accepted Club:', this.acceptedClub);
        },
        (error) => {
          console.error('Error fetching accepted club:', error);
        }
      );
    } else {
      console.error('User ID is missing or undefined.');
    }
  }
  getGuides(){
    this.guideService.getGuides(0).subscribe(
    data=>{
      console.log("Data received:", data); // Log the received data
        this.guides = data;
    },
    error => {
      console.error("Error fetching members:", error); // Log any errors that occur during the request
    }
  )
  }
  closeAddGuide()
  {
    this.isShowAddGuide = false;
    this.getGuides();
  }

  closeAddActivity()
  {
    this.isShowAddActivity = false;
    
  }
    showGuideDetails() {
      if (this.acceptedClub && this.acceptedClub.guides.length > 0) {
        const guides = this.acceptedClub.guides;
        const guideDetails = guides.map(guide => `
          <div>
            <h3>${guide.firstName} ${guide.lastName}</h3>
            <p>Email: ${guide.email}</p>
            <p>Date of Subscription: ${guide.dateOfSubscription}</p>
            <!-- Add any other guide properties you want to display -->
          </div>
        `).join('');
    
        Swal.fire({
          title: 'Guide Details',
          html: guideDetails,
          confirmButtonText: 'OK'
        });
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'No guides found for this club.'
        });
      }
    }


}
