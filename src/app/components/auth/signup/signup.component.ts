import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
 constructor(public router: Router, private route: ActivatedRoute) { }

  // On Signup link click
  onSignIn() {
    this.router.navigate(['login'], { relativeTo: this.route.parent });
    console.log('ihofs');
    
  }
  onSignup() {
    this.router.navigate(['dashboard'], { relativeTo: this.route.parent });
    console.log('ihofs');
    
  }
  ngOnInit(): void {
  }
}
