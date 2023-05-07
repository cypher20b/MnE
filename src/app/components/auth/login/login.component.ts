import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginDetails:any
  constructor(private router: Router, private route: ActivatedRoute) { }

  // On Forgotpassword link click
  onForgotpassword() {
    this.router.navigate(['forgot-password'], { relativeTo: this.route.parent });
  }
  login(){
    console.log(this.loginDetails)
    this.router.navigate(['signup'], { relativeTo: this.route.parent });
    Math.round()
  }
  // On Signup link click
  onSignup() {
    this.router.navigate(['signup'], { relativeTo: this.route.parent });
  }


ngOnInit(): void {
}

}
