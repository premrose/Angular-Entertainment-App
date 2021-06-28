import { Component} from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { AuthenticationService } from '../authentication.service';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{
  constructor(private authenticationservice : AuthenticationService, private http: HttpClient,
              private error: HttpErrorResponse  ) {}

  userName = new FormControl('',[Validators.required, Validators.email]);
  passWord = new FormControl('',Validators.required);
  inputForm = new FormGroup({
    username : this.userName,
    password : this.passWord,
  });


    getError1() {
      if (this.userName.hasError('required')) {
        return 'Enter a valid Mail Id';
      }

      return this.userName.hasError('email') ? 'Not a valid email' : '';
    }

    submit(){
      if(this.inputForm.valid){
        this.authenticationservice.loginUser(this.userName.value,this.passWord.value).subscribe(
          response => {
            // check if the response has token
            // check if the response is 200
            // if token is present add to local storage
            // redirect to page
          if (response.status == 200) {
            console.log('success');
            }
            else {
              console.error(
                `Error code ${this.error.status}, `)
            }
          },
          error=> {
            // display what error
          }
        )
      }else{
        //show err msg
        console.log('Something bad happened; please try again later.');
      }
    }
}
