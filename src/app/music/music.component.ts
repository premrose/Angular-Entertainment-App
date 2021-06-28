import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MusicService } from '../music.service';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.css']
})
export class MusicComponent extends MusicService{

  constructor(){
    super()
   }


}
