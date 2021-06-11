import { Component} from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{

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
    getError2() {
      if (this.passWord.hasError('required')) {
        return 'Enter a valid Password.';
      }

      return this.passWord.hasError('password') ? 'Incorrect Password.' : '';
    }
    submit(){
    }
}
