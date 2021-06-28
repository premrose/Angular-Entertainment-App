import { Component} from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { AuthenticationService } from '../authentication.service';
import { User } from '../user';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent{
  constructor(private authenticationservice : AuthenticationService) {}

  userData = new User('','','');

  userName = new FormControl('',[Validators.required, Validators.email]);
  passWord = new FormControl('',[Validators.required, Validators.minLength(6)]);
  passwordConfirm = new FormControl('',[Validators.required, Validators.minLength(6)]);

  inputForm = new FormGroup({
    username : this.userName,
    password : this.passWord,
    password_confirm : new FormControl('',[Validators.required, Validators.minLength(6)])},
    {validators: (control) => {
      if (control.value.password_confirm !== control.value.password) {
        control.get("password_confirm")?.setErrors({ notSame: true });
      }
      return null;
    },
  });

  getError() {
    if (this.userName.hasError('required')) {
      return 'Enter a valid Mail Id';
    }
    else
    return this.userName.hasError('email') ? 'Not a valid email' : '';
  }
  onSubmit() {

    if(this.inputForm.valid){
      this.authenticationservice.registerUser(this.userName.value,this.passWord.value,this.passwordConfirm.value).subscribe()
  }
  if (this.inputForm.invalid) {
    return;
  }
}
}
