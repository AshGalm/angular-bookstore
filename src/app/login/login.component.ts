import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../Services/Login.service'; // replace 'path-to-login-service' with the actual path

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  Email:string | undefined;
  Password:string | undefined;

  constructor(private loginService: LoginService, private router: Router) { } // use LoginService as a type here

  onLogin() {
    if (this.Email && this.Password) {
      this.loginService.login(this.Email, this.Password).subscribe(
        response => {
          console.log(response);
          // Handle successful login
          if (response.token) {
            localStorage.setItem('token', response.token); // set token in local storage
            this.router.navigate(['/home']);
          } else {
            // Optionally display an error message here
          }
        },
        error => {
          console.error(error);
          // Handle login error here, e.g. by showing an error message
        }
      );
    }
  }




}



