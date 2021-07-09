import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class VideoService {

  constructor(private authenticationservice : AuthenticationService,private http: HttpClient) { }

    getMedia(): Observable<any> {
      let headers = new HttpHeaders()
      headers .append('content-type', 'application/json')
      headers .append('Access-Control-Allow-Origin', '*')
      headers .append('Access-Control-Allow-Credentials', 'true' )
      headers .append('Authorization', `Bearer ${this.authenticationservice.getToken}`);
      return this.http.get<any>("http://127.0.0.1:8000/media/video/",{headers})
  }
}
