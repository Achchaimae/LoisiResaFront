import { Component, Input } from '@angular/core';
import { ActivityRespDTO } from 'src/app/core/model/ActivityRespDTO.model';
import { ReservationIdReqDTO } from 'src/app/core/model/ReservationIdReq.model';
import { ReservationReqDTO } from 'src/app/core/model/ReservationReqDTO.model';
import { ReservationRespDTO } from 'src/app/core/model/ReservationRespDTO.model';
import { AuthService } from 'src/app/core/service/auth.service';
import { ReservationService } from 'src/app/core/service/reservation.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent {
  constructor(private reservationService: ReservationService, public authService: AuthService) {}

  @Input() activityData: ActivityRespDTO | null = null;

  fees: number = 20; // Assuming fees value
  reservation: ReservationReqDTO = {
    id: {
      client_id: 0,
      activity_id: 0
    },
    date: '',
    nbrPerson: 0,
    etat: 'PENDING'
  };

  isSubmitting: boolean = false; // Flag to track form submission

  
  saveReservation() {
    const authUser = this.authService.getAuthUser();
    if (authUser && authUser.id && this.reservation && this.activityData?.id !== undefined) {
      const reservationIdReqDTO: ReservationIdReqDTO = {
        client_id: Number(authUser.id),
        activity_id: Number(this.activityData.id) // Use Number() to convert to number
      };

      this.reservation.id = reservationIdReqDTO; // Assign reservationIdReqDTO to reservation id

      this.isSubmitting = true; // Set submitting flag to true
      this.reservationService.saveReservation(this.reservation)
        .subscribe(
          () => {
            Swal.fire({
              icon: 'success',
              title: 'Reservation saved successfully',
              showConfirmButton: false,
              timer: 1500
            });
          },
          (error) => {
            console.error('HTTP error:', error);
            Swal.fire({
              icon: 'error',
              title: 'Error',
              text: 'An error occurred while saving the reservation. Please try again.'
            });
          }
        )
        .add(() => {
          this.isSubmitting = false; // Reset submitting flag after completion
        });
    } else {
      console.error('User not authenticated or reservation/activity data not provided.');
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'User not authenticated or reservation/activity data not provided.'
      });
    }
  }

  // saveReservation() {
  //   if (this.isSubmitting) {
  //     return; // Prevent multiple submissions
  //   }

  //   const authUser = this.authService.getAuthUser();
  //   if (this.activityData && authUser && authUser.id) {
  //     const reservationIdReqDTO: ReservationIdReqDTO = {
  //       client_id: Number(authUser.id), // Assuming authUser.id is the client_id
  //       activity_id: this.activityData.id,
  //     };

  //     this.reservation.id = reservationIdReqDTO; // Assign reservationIdReqDTO to reservation id
  //     this.reservation.etat = 'PENDING';

  //     this.isSubmitting = true; // Set submitting flag to true
  //     this.reservationService.saveReservation(this.reservation)
  //       .subscribe(
  //         (response) => {
  //           Swal.fire({
  //             icon: 'success',
  //             title: 'Club saved successfully',
  //             showConfirmButton: false,
  //             timer: 1500
  //           });
  //         },
  //         (error) => {
  //           console.error('HTTP error:', error);
  //         }
  //       )
  //       .add(() => {
  //         this.isSubmitting = false; // Reset submitting flag after completion
  //       });
  //   } else {
  //     console.error('No activity data provided or user not authenticated.');
  //   }
  // }
}