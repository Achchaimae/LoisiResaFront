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
  isAuthenticated = false; // Flag to track authentication status
  ngOnInit(): void {
    this.getCurrentUser();
    this.checkAuthentication();
  }

  getCurrentUser(): void {
    this.currentUser = this.authService.getAuthUser();
    console.log("data",this.currentUser);
    
  }
  checkAuthentication() {
    
    this.authService.isAuthenticated().subscribe((authenticated) => {
      this.isAuthenticated = authenticated;
      console.log(this.isAuthenticated);
    });
  }
  logout() {
    // Clear authentication token and user data
    this.authService.clearAuthToken();
    console.log("out");
    this.checkAuthentication();
    
  }
}