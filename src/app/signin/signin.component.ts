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

  inputForm = new FormGroup({
    username : this.userName,
    password : new FormControl('',[Validators.required, Validators.minLength(6)]),
    confirmpassword : new FormControl('',[Validators.required, Validators.minLength(6)])},
    {validators: (control) => {
      if (control.value.confirmpassword !== control.value.password) {
        control.get("confirmpassword")?.setErrors({ notSame: true });
      }
      return null;
    },
  });

  getError() {
    if (this.userName.hasError('required')) {
      return 'Enter a valid Mail Id';
    }

    return this.userName.hasError('email') ? 'Not a valid email' : '';
  }
  onSubmit() {

    console.warn(this.inputForm.value);
  }
  ngOnInit() {

  }
}
