import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { Router } from '@angular/router'
import { Observable, BehaviorSubject, throwError } from 'rxjs';
import { catchError, retry , map } from 'rxjs/operators';

import { User } from './user';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private userSubject: BehaviorSubject<User>;
  public user: Observable<User>;

  private _registerUrl = "/signin";

  constructor(private http: HttpClient,private router: Router) {  this.userSubject = new BehaviorSubject<User>(null);
    this.user = this.userSubject.asObservable(); }

  public get userValue(): User {
    return this.userSubject.value;
}
  registerUser(username:string,password:string) {
    return this.http.post(this._registerUrl, {'username': username,'password': password, 'confirmpassword': password})
  }

  loginUser(username:string,password:string) {
    return this.http.post<any>(`${environment.apiUrl}/users/authenticate`, { username, password }, { withCredentials: true })
    .pipe(map(user => {
        this.userSubject.next(user);
        this.startRefreshTokenTimer();
        return user;
    }));
  }

  logout() {
    this.http.post<any>(`${environment.apiUrl}/users/revoke-token`, {}, { withCredentials: true }).subscribe();
    this.stopRefreshTokenTimer();
    this.router.navigate(['/login']);
  }


  getToken() {
    return localStorage.getItem('token')
  }

  loggedIn() {
    return !!localStorage.getItem('token')
  }
  refreshToken() {
    return this.http.post<any>(`${environment.apiUrl}/users/refresh-token`, {}, { withCredentials: true })
        .pipe(map((user) => {
            this.userSubject.next(user);
            this.startRefreshTokenTimer();
            return user;
        }));
  }
  private refreshTokenTimeout;

  private startRefreshTokenTimer() {
      // parse json object from base64 encoded jwt token
      const jwtToken = JSON.parse(atob(this.userValue.jwtToken.split('.')[1]));

      // set a timeout to refresh the token a minute before it expires
      const expires = new Date(jwtToken.exp * 1000);
      const timeout = expires.getTime() - Date.now() - (60 * 1000);
      this.refreshTokenTimeout = setTimeout(() => this.refreshToken().subscribe(), timeout);
  }

  private stopRefreshTokenTimer() {
      clearTimeout(this.refreshTokenTimeout);
  }
}

