import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ActivityReqDTO } from '../model/ActivityReqDTO.model';
import { ActivityRespDTO } from '../model/ActivityRespDTO.model';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {
  private apiUrl = 'http://localhost:8080/activity';
  
  constructor(private http: HttpClient) { }

   public filter : BehaviorSubject<string> = new BehaviorSubject<string>('all')

   public activities : BehaviorSubject<ActivityRespDTO[]> = new BehaviorSubject<ActivityRespDTO[]>([])
 
  getActivities(page: number): void {
    const url = `${this.apiUrl}?page=${page}`;
    this.http.get<ActivityRespDTO[]>(url).subscribe((res: any ) =>{
      this.activities.next(res.content as ActivityRespDTO[])
    })
  }
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
  getActivitiesByTag(tag: string, page: number = 0) : void {
    const params = new HttpParams()
    .set('tag', tag)
    .set('page', page.toString());
    this.http.get<ActivityRespDTO[]>(`${this.apiUrl}/tag/${tag}`, { params }).subscribe((res: any ) =>{
      this.activities.next(res.content as ActivityRespDTO[])
    })
  }
}
