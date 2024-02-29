import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../Services/Login.service'; // replace 'path-to-login-service' with the actual path

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {


  constructor(private loginService: LoginService, private router: Router) { } // use LoginService as a type here

  login() {

  }
}
