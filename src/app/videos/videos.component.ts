import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { Media } from '../media';
import { User } from '../user';
import { VideoService } from '../video.service';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent implements OnInit {

  constructor(
    private authenticationservice: AuthenticationService,
    private videoservice: VideoService,
    private http: HttpClient
    ) { }

  mediaId : Media['Media_id'];
  videos: Media[] = [];

  ngOnInit() {
    this.getMediaVideos()
  }

  getMediaVideos() {
    this.videoservice.getMedia().subscribe(media => this.videos = media['results']);
  }

  public favourites = ['']


  isfavourite(like_by_user: String) {
    this.http.get<User>("http://127.0.0.1:8000/media/favourite/",{})
    return this.favourites.filter(v => v == like_by_user).length == 1 ? true : false;
  }

  removeFavourite(like_by_user: string) {
    this.favourites.splice(this.favourites.indexOf(like_by_user), 1);
    return this.http.post<User>("http://127.0.0.1:8000/media/favourite/{id}/",{params: this.mediaId})
  }

  setFavourite(like_by_user: string) {
    this.favourites.push(like_by_user);
    return this.http.post<User>("http://127.0.0.1:8000/media/favourite/",{params: this.mediaId})
  }




}
