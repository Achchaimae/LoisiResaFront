import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { loginInfo } from 'src/app/core/model/loginInfo.model';
import { AuthService } from 'src/app/core/service/auth.service';
import { login, successLogin } from 'src/app/store/user/user.action';
import { selectUserState } from 'src/app/store/user/user.selectors';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private store: Store, private router: Router,private authService:AuthService) {}
  info: loginInfo = {
    email: '',
    password: '',
  };
  error: String = '';
  login() {
    this.authService.authentication(this.info).subscribe(data => {
        return this.store.dispatch(successLogin({
          user: data.user,
          token: data.access_token,
        }));
    
      })
    
    setTimeout(() => {
      this.store.select(selectUserState).subscribe((res) => {
        
        if (res.token && res.user) {
          this.authService.setAuthInfo(res.token,res.user);
          this.router.navigate(['/home']);
        } else {
          this.error = 'email or password incorrect';
        }
      });
    }, 1000);
  }
}
