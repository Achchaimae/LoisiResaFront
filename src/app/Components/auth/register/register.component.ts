import { Component } from '@angular/core';
import { User } from 'src/app/core/model/User.model';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/service/auth.service';
import { selectUserState } from 'src/app/store/user/user.selectors';
import { register, successLogin } from 'src/app/store/user/user.action';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(private store: Store, private router: Router, private authService: AuthService) {}
  info: User = {
    id: '',
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    dateOfBirth: '',
    password: '',
    accessionDate: '',
    nationality: '',
    identityDocumentType: '',
    identityNum: '',
    role: 'client',
    requestedRole: '',
    requestStatus: 1, //0 is rejected 1 is pending 2 is approved,
    conversations: [],
    messages: []
  };
  error: string = '';
  
  register() {
    this.authService.register(this.info).subscribe(data => {
      
      return this.store.dispatch(successLogin({
        user: data.user,
        token: data.access_token,
      }));
  
    })
    // this.store.dispatch(register({ user: this.info }));
    setTimeout(() => {
      this.store.select(selectUserState).subscribe((res) => {
        if (res.token && res.user) {
          this.authService.setAuthInfo(res.token, res.user);
          this.router.navigate(['/']);
        } else {
          this.error = 'Registration failed';
        }
      });
    }, 1000);
  }
  
}
