// auth.interceptor.ts
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AuthService } from '../core/service/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private store:Store,private authService:AuthService){}
  token:String = ''; 

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.token =  this.authService.getAuthToken();
    const authReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${this.token}`
      }
    });

    return next.handle(authReq);
  }
}
