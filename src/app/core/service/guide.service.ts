import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GuideRespDTO } from '../model/GuideRespDTO.model';

@Injectable({
  providedIn: 'root'
})
export class GuideService {

  private apiUrl = 'http://localhost:8080/guide'; // Update with your backend API URL

  constructor(private http: HttpClient) {}

  addGuideToClub(guideId: number, clubId: number): Observable<GuideRespDTO> {
    const params = new HttpParams()
      .set('guideId', guideId.toString())
      .set('clubId', clubId.toString());

    const url = `${this.apiUrl}/add-to-club`;

    return this.http.post<GuideRespDTO>(url, null, { params });
  }
  getGuides(page:number): Observable<GuideRespDTO[]> {
    return this.http.get<GuideRespDTO[]>(`${this.apiUrl}`+'?page=' + page);
  }
}
