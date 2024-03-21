import { Component } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { ClubService } from 'src/app/core/service/club.service';
import { ClubReqDTO } from 'src/app/core/model/ClubReq.model';
import Swal from 'sweetalert2';
import { AuthService } from 'src/app/core/service/auth.service';

@Component({
  selector: 'app-cthome',
  templateUrl: './cthome.component.html',
  styleUrls: ['./cthome.component.css'],
 animations: [
  trigger('fadeInOut', [
    state('void', style({ opacity: 0 })),
    transition(':enter, :leave', [
      animate(300)
    ])
  ])
]
})
export class CThomeComponent  {
  isFormVisible: boolean = false;
  clubForm: ClubReqDTO={
    id: 0,
    name: '',
    location: '',
    phone: '',
    logo: '',
    status: 'Pending',
    ownerId: ''
  };

  constructor(private clubService: ClubService,public authService:AuthService) {}

  toggleFormVisibility() {
    this.isFormVisible = !this.isFormVisible;
  }

  submitForm() {
    const authUser = this.authService.getAuthUser();
    if (authUser && authUser.id) {
      this.clubForm.ownerId = authUser.id;
      this.clubService.saveClub(this.clubForm).subscribe(
        (response) => {
          Swal.fire({
            icon: 'success',
            title: 'Club saved successfully',
            showConfirmButton: false,
            timer: 1500
          });
        },
        (error) => {
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Failed to save club',
            showConfirmButton: false,
            timer: 1500
          });
        }
      );
    } else {
      console.error('User ID is missing or undefined.');
    }
  }

  
}