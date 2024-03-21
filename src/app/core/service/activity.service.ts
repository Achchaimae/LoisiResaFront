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
}
