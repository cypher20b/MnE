import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginCredentials } from 'src/app/interfaces/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginDetails:LoginCredentials={email:'', password:''}
  constructor(private router: Router, private route: ActivatedRoute) { }

  // On Forgotpassword link click
  onForgotpassword() {
    this.router.navigate(['forgot-password'], { relativeTo: this.route.parent });
  }
  login(){
    this.router.navigate(['dashboard']);
    console.log(this.loginDetails)
    // Math.round()
  }
  // On Signup link click
  onSignup() {
    this.router.navigate(['signup'], { relativeTo: this.route.parent });
  }


ngOnInit(): void {
}

}
