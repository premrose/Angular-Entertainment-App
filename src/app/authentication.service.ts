import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router'
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private _registerUrl = "/signin";
  private _loginUrl = "/login";

  constructor(private http: HttpClient,private _router: Router) { }

  registerUser() {
    return this.http.post(this._registerUrl, {responseType: 'text'})
  }

  loginUser() {
    return this.http.post(this._loginUrl, {responseType: 'text'})
  }

  logoutUser() {
    localStorage.removeItem('token')
    this._router.navigate(['/login'])
  }

  getToken() {
    return localStorage.getItem('token')
  }

  loggedIn() {
    return !!localStorage.getItem('token')
  }
}

