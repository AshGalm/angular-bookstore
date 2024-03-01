import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/Services/Login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
  isTokenPresent = false;

constructor( private loginService: LoginService, private router: Router) { }

ngOnInit() {
  this.isTokenPresent = !!localStorage.getItem('token');
}

  Logout() {
    const confirmLogout = confirm('Are you sure you want to logout?');
    if (confirmLogout) {
      localStorage.removeItem('token');
      this.router.navigate(['/login']);
    } else{
      return;
    }
  }

}
