import { Component } from '@angular/core';
import { User } from 'src/app/core/model/User.model';
import { AuthService } from 'src/app/core/service/auth.service';

@Component({
  selector: 'app-admin-nav',
  templateUrl: './admin-nav.component.html',
  styleUrls: ['./admin-nav.component.css']
})
export class AdminNavComponent {
  currentUser: User | null = null;
  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.getCurrentUser();
  }

  getCurrentUser(): void {
    this.currentUser = this.authService.getAuthUser();
    console.log("data",this.currentUser);
    
  }

  logout(): void {
    this.authService.clearAuthToken();
    // Add any other logout logic here, such as routing to the login page
  }
}