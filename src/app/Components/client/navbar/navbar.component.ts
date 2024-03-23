import { Component } from '@angular/core';
import { AuthService } from 'src/app/core/service/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isOpen = false;

  isAuthenticated = false; // Flag to track authentication status
  router: any;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    // Check authentication status when the component initializes
    this.checkAuthentication();
  }

  toggleDropdown() {
    this.isOpen = !this.isOpen;
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
    // Redirect to the login page or any other desired route
    console.log("waaaaaaaaaaaaaaaaaaaaaaaaaaaa");
    
  }
  


}
