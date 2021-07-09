import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { AuthenticationService } from '../authentication.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{
  constructor(private authenticationservice : AuthenticationService,private router: Router) {}
  isLoggedIn : Observable<boolean>;
  isLoggedOut : Observable<boolean>;

  loginError: string;
  username = new FormControl('',[Validators.required]);
  password = new FormControl('',Validators.required);

  inputForm = new FormGroup({
    userName : this.username,
    passWord : this.password,
  });

  getError() {
    if (this.username.hasError('required')) {
      return 'You must Enter a Username';
    }

    return this.username.hasError('email') ? 'Not a valid email' : '';
  }

  getError1() {
    if (this.password.hasError('required')) {
      return 'You must Enter the Password';
    }

    return this.password.hasError('password') ? 'Not a valid password' : '';
  }

  submit(){
      if(this.inputForm.valid){
        this.authenticationservice.loginUser(this.username.value,this.password.value).subscribe(

          response => {
            // check if the response has token
            // check if the response is 200
            // if token is present add to local storage
            // redirect to page

            if (response.status == 200) {

              this.router.navigate(['/videos']);
          }



          // else {
            //   console.error(
            //     `Error code ${this.error.status}, `)
            // }
          },
          error=> {
            this.loginError = 'Username or password is incorrect.';
          }
        )
      }else{
        //show err msg
        console.log('Something bad happened; please try again later.');
      }
    }
}
