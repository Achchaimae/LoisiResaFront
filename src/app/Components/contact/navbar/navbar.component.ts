import { Component } from '@angular/core';
import { AuthService } from 'src/app/core/service/auth.service';

@Component({
  selector: 'app-navbar-2',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isOpen = false;

  isAuthenticated = false; 
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
    this.authService.clearAuthToken();
    console.log("out");
    this.checkAuthentication();

    
  }
  
}
