import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable, of } from 'rxjs';
import { User } from '../model/User.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
 
  private apiUrl = 'http://localhost:8080/auth';
  private jwtHelper: JwtHelperService = new JwtHelperService();
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(private http: HttpClient,private cookieService: CookieService) {}

  register(data:any): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`,data);
  }

  authentication(data:any): Observable<any> {
    return this.http.post(`${this.apiUrl}/authenticate`,data);
  }

  getUserBystatus(staus: number): Observable<User> {
    const url = `${this.apiUrl}/user/${staus}`;
    return this.http.get<User>(url);
  }
  updateUserRole(userId: string, newRole: string): Observable<User> {
    const url = `${this.apiUrl}/${userId}/role`;
    const params = { newRole }; // Include new role as query parameter
    return this.http.put<User>(url, null, { params });
  }
  refuseRequest(userId: string): Observable<void> {
    const url = `${this.apiUrl}/user/${userId}/refuse`;
    return this.http.put<void>(url, {});
  }



  getUserInfo(token: string): any {
    const decodedToken = this.jwtHelper.decodeToken(token);
    return decodedToken;
  }

  setAuthInfo(token: string,user:User): void {
    this.cookieService.set('token', token);
    this.cookieService.set('user', JSON.stringify(user));
  }

  getAuthToken() : string
  {
    
    return this.cookieService.get('token');
  }
  getAuthUser(): User | null {
    const userString = this.cookieService.get('user');
  
    if (!userString) {
      return null;  // 'user' cookie does not exist
    }
  
    try {
      return JSON.parse(userString) as User;
    } catch (error) {
      console.error('Error parsing user cookie:', error);
      return null;
    }
  }

  clearAuthToken(): void {
    this.cookieService.delete('token', '/');
    this.cookieService.delete('user', '/');
  }
    

  // Check if the user is authenticated based on the presence of a valid token in the cookie
  isAuthenticated(): Observable<boolean> {
    return of(this.cookieService.check('token'));
  }
}
