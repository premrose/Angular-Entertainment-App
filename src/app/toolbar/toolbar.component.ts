import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  constructor(private authenticationservice: AuthenticationService){ }

  isLoggedIn$ : Observable<boolean>;
  isLoggedOut$ : Observable<boolean>;

  ngOnInit() {
    this.isLoggedIn$ = this.authenticationservice.isUserLoggedIn;
    this.isLoggedOut$ = this.authenticationservice.isUserLoggedOut;
  }

  onLogout() {
    this.authenticationservice.logout();
  }
}

