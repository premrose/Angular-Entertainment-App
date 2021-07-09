import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { BehaviorSubject, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private loggedOut: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);

  private userSubject: BehaviorSubject<User>;
  public user: Observable<User>;
  errorData: {};

  private refToken = this.getRefreshToken;

  constructor(private http: HttpClient,private router: Router) {
    this.userSubject = new BehaviorSubject<User>(null as any);
    this.user = this.userSubject.asObservable();
   }

  public get userValue(): User {
    return this.userSubject.value;
}

public registerUser(username:string,password:string,password_confirm:string): Observable<any> {
    let headers = new HttpHeaders()
        headers .set('content-type', 'application/json')
        headers .set('Access-Control-Allow-Origin', '*')
      const body = { username, password, password_confirm };
      const params = new HttpParams();
    return this.http.post<User>('http://127.0.0.1:8000/api/v1/accounts/register/',body,{headers, params, withCredentials: true})
    .pipe(map(user => {
      this.userSubject.next(user);
      localStorage.setItem('access',(user.access));
      localStorage.setItem('refresh',(user.refresh));
      this.router.navigate(['/login']);
      this.startRefreshTokenTimer();
      this.loggedIn.next(true);
      this.loggedOut.next(false);
      return user;
      }),
      catchError(this.handleError)
      );
    }

  public loginUser(username:string,password:string): Observable<any> {
      let headers = new HttpHeaders()
        headers .set('content-type', 'application/json')
        headers .set('Access-Control-Allow-Origin', '*')
      const body = { username, password };
      const params = new HttpParams();
      return this.http.post<User>('http://127.0.0.1:8000/api/token/',body,{headers, params,withCredentials: true})
      .pipe(map(user => {
        this.userSubject.next(user);
          localStorage.setItem('access',(user.access));
          localStorage.setItem('refresh',(user.refresh));
          this.router.navigate(['/videos']);
          this.loggedIn.next(true);
          this.loggedOut.next(false);
          this.startRefreshTokenTimer();
          return user;
      }),
      catchError(this.handleError)
      );
    }

  public logout(){
      this.stopRefreshTokenTimer();
      this.userSubject.next(null as any);
      this.router.navigate(['/login']);
      this.loggedIn.next(false);
      this.loggedOut.next(true);
  }

  public getRefreshToken(){
    return localStorage.getItem('refresh');
  }

  public refreshToken( refToken: string ): Observable<any> {
    const body = { refToken };
    return this.http.post<User>('http://127.0.0.1:8000/api/token/refresh/',body)
    .pipe(map(user => {
        localStorage.setItem('access',(user.access));
    }));
  }

  public getToken() {
    return localStorage.getItem('access');
  }

  get isLoggedIn() {
    this.loggedIn.asObservable();
      if(localStorage.getItem('access') != null)
        this.loggedIn.next(true);
       this.loggedOut.next(false);
      if (localStorage.getItem('access')) {
        return true;
      }
      return false;
    }

  isLoggedOut() {
    this.loggedOut.asObservable();
  }

  get isUserLoggedIn(){
    return this.loggedIn.asObservable();
  }
  get isUserLoggedOut(){
    return this.loggedOut.asObservable();
  }

  public forgotPass(username:string): Observable<any> {
      const body = { username };
      return this.http.post<User>('http://127.0.0.1:8000/api/v1/accounts/send-reset-password-link/',body)
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {

      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {

      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
    }

    // return an observable with a user-facing error message
    this.errorData = {
      errorTitle: 'Oops! Request for document failed',
      errorDesc: 'Something bad happened. Please try again later.'
    };
    return throwError(this.errorData);
  }

  private refreshTokenTimeout: any;

    private startRefreshTokenTimer() {
        // parse json object from base64 encoded jwt token
        const jwtToken = JSON.parse(atob(this.userValue.access.split('.')[1]));

        // set a timeout to refresh the token a minute before it expires
        const expires = new Date(jwtToken.exp * 1000);
        const timeout = expires.getTime() - Date.now() - (60 * 1000);
        this.refreshTokenTimeout = setTimeout(() => this.refreshToken, timeout);
    }

    private stopRefreshTokenTimer() {
        clearTimeout(this.refreshTokenTimeout);
    }
}

