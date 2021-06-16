import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  isLoggedIn$: Observable<boolean>;

  constructor(private authenticationservice: AuthenticationService, private router : Router) { }

  ngOnInit() {
    this.isLoggedIn$ = this.authenticationservice.loggedIn;
  }

  onLogout(){
    this.authenticationservice.logout();
  }
}

