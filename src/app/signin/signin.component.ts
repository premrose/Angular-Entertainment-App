import { Component} from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent{

  inputForm = new FormGroup({
    username : new FormControl('',Validators.required),
    password : new FormControl('',[Validators.required, Validators.minLength(6)]),
    confirmpassword : new FormControl('',[Validators.required, Validators.minLength(6)])},
  {validators: (control) => {
      if (control.value.password !== control.value.confirmpassword) {
        control.get("confirmpassword")?.setErrors({ notSame: true });
      }
      return null;
    },
  });
  onSubmit() {

    console.warn(this.inputForm.value);
  }

}
