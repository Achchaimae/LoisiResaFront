import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ReservationReqDTO } from '../model/ReservationReqDTO.model';
import { ReservationRespDTO } from '../model/ReservationRespDTO.model';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  private apiUrl = 'http://localhost:8080/reservation';
  constructor(private http: HttpClient) { }

  saveReservation(reservationReqDTO: ReservationReqDTO): Observable<ReservationRespDTO | null> {
    return this.http.post<ReservationRespDTO>(this.apiUrl, reservationReqDTO);
  }
}