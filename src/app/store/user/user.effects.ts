// auth.effects.ts
import { Injectable } from '@angular/core';
import {  ofType, createEffect, Actions } from '@ngrx/effects';
import { mergeMap, map, switchMap } from 'rxjs/operators';
import { login } from './user.action';
import * as MyActions from './user.action';
import { Observable, of } from 'rxjs';
import { AuthService } from '../../core/service/auth.service';
import { User } from '../../core/model/User.model';

@Injectable()
export class AuthEffects {

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(login),
      mergeMap((action) =>{
          return this.authService.authentication(action.loginInfo).pipe(
            map((data) => {
              console.log(data);
              
              return MyActions.successLogin({
                user: data.user,
                token: data.access_token,
              });
            })
          )
        return of(action);
      }
      )
    )
  );

  // register$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType("[Auth] register"),
      
  //     switchMap((action: { user: User }): Observable<any> => {
  //       return this.authService.register(action.user).pipe(
  //         map((data) => {
  //           return MyActions.successLogin({
  //             user: data.user,
  //             token: data.access_token,
  //           });
  //         })
  //       )
  //     }
  //     )
  //   )
  // );
  

  constructor(private actions$: Actions, private authService: AuthService) {}
}