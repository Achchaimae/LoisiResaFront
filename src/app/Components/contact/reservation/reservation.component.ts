import { Component } from '@angular/core';
import { ClubRespDTO } from 'src/app/core/model/ClubResp.model';
import { ReservationIdRespDTO } from 'src/app/core/model/ReservationIdResp.model';
import { ReservationReqDTO } from 'src/app/core/model/ReservationReqDTO.model';
import { ReservationRespDTO } from 'src/app/core/model/ReservationRespDTO.model';
import { AuthService } from 'src/app/core/service/auth.service';
import { ClubService } from 'src/app/core/service/club.service';
import { ReservationService } from 'src/app/core/service/reservation.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent {
  reservations: ReservationRespDTO[] = [];
  acceptedClub: ClubRespDTO | undefined;
  clubId:number=0;
  constructor(private clubService: ClubService,public reservationService :ReservationService,public authService:AuthService) {}

  ngOnInit(): void {
    this.getAcceptedClubByOwner();

  }
  getAcceptedClubByOwner() {
    const authUser = this.authService.getAuthUser();
    if (authUser && authUser.id) {
      this.clubService.getAcceptedClubByOwner(authUser.id).subscribe(
        (club: ClubRespDTO) => {
          this.acceptedClub = club;
          console.log('Accepted Club:', this.acceptedClub);
          this.clubId=this.acceptedClub.id
           
        this.fetchReservationsByClubId(this.clubId);
        if (this.acceptedClub && this.acceptedClub.id) {
          localStorage.setItem('club_id', this.acceptedClub.id.toString());
        }
        },
        (error) => {
          console.error('Error fetching accepted club:', error);
        }
      );
    } else {
      console.error('User ID is missing or undefined.');
    }
  }
  fetchReservationsByClubId(clubId: number): void {
    this.reservationService.getReservationsByClubId(clubId)
      .subscribe(reservations => {
        this.reservations = reservations;
        console.log("reservation",this.reservations);
        
      });
  }
  
  acceptReservation(clientId: number, activityId: number): void {
    this.reservationService.acceptReservation(clientId, activityId)
      .subscribe((acceptedReservation: ReservationRespDTO | null) => {
        if (acceptedReservation) {
          console.log('Reservation accepted:', acceptedReservation);
          Swal.fire('Success', 'Reservation accepted successfully!', 'success'); // SweetAlert for success
          this.getAcceptedClubByOwner();
        } else {
          console.error('Error accepting reservation.');
          Swal.fire('Error', 'Error accepting reservation!', 'error'); // SweetAlert for error
        }
      });
  }

  refuseReservation(clientId: number, activityId: number): void {
    this.reservationService.refuseReservation(clientId, activityId)
      .subscribe((refusedReservation: ReservationRespDTO | null) => {
        if (refusedReservation) {
          console.log('Reservation refused:', refusedReservation);
          Swal.fire('Success', 'Reservation refused successfully!', 'success'); // SweetAlert for success
          this.getAcceptedClubByOwner();
        } else {
          console.error('Error refusing reservation.');
          Swal.fire('Error', 'Error refusing reservation!', 'error'); // SweetAlert for error
        }
      });
  }
  
}
