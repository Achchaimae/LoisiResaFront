import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ClubRespDTO } from '../model/ClubResp.model';
import { ClubReqDTO } from '../model/ClubReq.model';

@Injectable({
  providedIn: 'root'
})
export class ClubService {
  private apiUrl = 'http://localhost:8080/club';

  constructor(private http: HttpClient) {}

  saveClub(club: ClubReqDTO): Observable<ClubRespDTO> {
    return this.http.post<ClubRespDTO>(this.apiUrl, club);
  }

  getPendingClubs(page: number): Observable<ClubRespDTO[]> {
    return this.http.get<ClubRespDTO[]>(this.apiUrl+ '/pending'+'?size=8&page=' + page);
  }
  acceptRequest(clubId: number): Observable<ClubRespDTO> {
    return this.http.put<ClubRespDTO>(`${this.apiUrl}/accept/${clubId}`, {});
  }

  refuseRequest(clubId: number): Observable<ClubRespDTO> {
    return this.http.put<ClubRespDTO>(`${this.apiUrl}/refuse/${clubId}`, {});
  }
}
