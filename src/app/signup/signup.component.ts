import { Component} from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent{
  constructor(private authenticationservice : AuthenticationService,private router: Router) {}

  username = new FormControl('',[Validators.required]);
  password = new FormControl('',[Validators.required, Validators.minLength(6)]);
  password_confirm = new FormControl('',[Validators.required]);

  inputForm = new FormGroup({
    userName : this.username,
    passWord : this.password,
    passwordConfirm : this.password_confirm,
    },
      {validators: (control) => {
      if (control.value.passwordConfirm !== control.value.passWord) {
        control.get("passwordConfirm")?.setErrors({ notSame: true });
      }
      return null;
    },
    }
  );

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
  submit() {

    if(this.inputForm.valid){

      this.authenticationservice.registerUser(this.username.value,this.password.value,this.password_confirm.value).subscribe(
      response => {
        if (response.status === 200) {
          this.router.navigate(['/videos']);
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
