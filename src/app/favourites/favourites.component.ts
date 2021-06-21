import { Component, OnInit } from '@angular/core';
import { VideosComponent } from '../videos/videos.component';
import { MusicComponent } from '../music/music.component';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.css']
})
export class FavouritesComponent extends VideosComponent {

  constructor() {
    super()
  }

  public favourites = [""]


  ngOnInit(): void {
  }

}
