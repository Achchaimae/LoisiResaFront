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
  getReservationsByClubId(clubId: number): Observable<ReservationRespDTO[]> {
    return this.http.get<ReservationRespDTO[]>(this.apiUrl +`/find-by-club/${clubId}`);
  }
  // acceptReservation(reservationId: number): Observable<ReservationRespDTO | null> {
  //   return this.http.put<ReservationRespDTO>(`${this.apiUrl}/accept/${reservationId}`, null);
  // }

  // refuseReservation(reservationId: number): Observable<ReservationRespDTO | null> {
  //   return this.http.put<ReservationRespDTO>(`${this.apiUrl}/refuse/${reservationId}`, null);
  // }
  acceptReservation(clientId: number, activityId: number): Observable<ReservationRespDTO | null> {
    return this.http.post<ReservationRespDTO>(`${this.apiUrl}/accept?clientId=${clientId}&activityId=${activityId}`, null);
  }

  refuseReservation(clientId: number, activityId: number): Observable<ReservationRespDTO | null> {
    return this.http.post<ReservationRespDTO>(`${this.apiUrl}/refuse?clientId=${clientId}&activityId=${activityId}`, null);
  }
}