import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { AuthenticationService } from '../authentication.service';
import { Media } from '../media';
import { MusicService } from '../music.service';
import { User } from '../user';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.css']
})
export class MusicComponent implements OnInit {

  constructor(
    private authenticationservice: AuthenticationService,
    private musicservice: MusicService,
    private http: HttpClient){ }

    mediaId : Media['Media_id'];
    musics: Media[] = [];

    ngOnInit() {
      this.getMediaMusics()
    }

    getMediaMusics() {
      this.musicservice.getMedia().subscribe(media => this.musics = media['results']);
    }

    public favourites = ['']


    isfavourite(like_by_user: string) {
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
