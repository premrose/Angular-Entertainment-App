import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { VideoService } from '../video.service';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent extends VideoService {

  constructor(){
    super()
   }




}
