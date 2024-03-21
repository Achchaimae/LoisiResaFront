import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivityReqDTO } from '../model/ActivityReqDTO.model';
import { ActivityRespDTO } from '../model/ActivityRespDTO.model';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {
  private apiUrl = 'http://localhost:8080/activity';
  
  constructor(private http: HttpClient) { }

  saveActivity(activity: ActivityReqDTO): Observable<ActivityRespDTO> {
    return this.http.post<ActivityRespDTO>(`${this.apiUrl}`, activity);
  }
  getActivitiesByClubId(clubId: number, page: number): Observable<ActivityRespDTO[]> {
    const url = `${this.apiUrl}/club/${clubId}?page=${page}&size=${8}`;
    return this.http.get<ActivityRespDTO[]>(url);
  }

  getPendingClubs(page: number): Observable<ActivityRespDTO[]> {
    return this.http.get<ActivityRespDTO[]>(this.apiUrl+ '/pending'+'?size=8&page=' + page);
  }
  getActivityById(activityId: number): Observable<ActivityRespDTO> {
    const url = `${this.apiUrl}/find/${activityId}`;
    return this.http.get<ActivityRespDTO>(url);
  }
}
