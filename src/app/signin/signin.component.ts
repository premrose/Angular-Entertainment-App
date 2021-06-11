import { Component} from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { User } from '../user';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent{
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
  // loginUser () {
  //   this.authenticationservice.loginUser(this.loginUserData)
  //   .subscribe(
  //     res => {
  //       localStorage.setItem('token', res.token)
  //       this.router.navigate(['/videos'])
  //     },
  //     err => console.log(err)
  //   )
  // }

//   onSubmit(username:string,password:string,confirmpassword:string){
//     this.inputForm.(username,password,confirmpassword).subscribe((data : any)=>{
//      localStorage.setItem('userToken',data.access_token);
//      this.router.navigate(['/']);
//    },
//    (err : HttpErrorResponse)=>{
//      this.isLoginError = true;
//    });
//  }

}
