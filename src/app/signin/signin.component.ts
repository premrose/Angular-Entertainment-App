import { Component} from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent{
  username =new FormControl('',Validators.required);
  inputForm = new FormGroup({
    username : this.username,
    password : new FormControl('',[Validators.required, Validators.minLength(6)]),
    confirmpassword : new FormControl('',[Validators.required, Validators.minLength(6)])},
    {validators: (control) => {
      if (control.value.password !== control.value.confirmpassword) {
        control.get("confirmpassword")?.setErrors({ notSame: true });
      }
      return null;
    },
  });
  getError() {
    if (this.username.hasError('required')) {
      return 'You must enter a value !';
    }

    return this.username.hasError('email') ? 'Not a valid email' : '';
  }
  onSubmit() {

    console.warn(this.inputForm.value);
  }

}
