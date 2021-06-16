import { Component, OnInit } from '@angular/core';
import { FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-forgotpass',
  templateUrl: './forgotpass.component.html',
  styleUrls: ['./forgotpass.component.css']
})
export class ForgotpassComponent implements OnInit {

  username = new FormControl('',[Validators.required, Validators.email]);

  getError() {
    if (this.username.hasError('required')) {
      return 'Enter a valid Mail Id';
    }

    return this.username.hasError('email') ? 'Not a valid email' : '';
  }
    submitted = false;

    submit() {}
  constructor() { }

  ngOnInit(): void {
  }

}
