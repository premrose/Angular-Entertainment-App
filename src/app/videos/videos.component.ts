import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent {

  public videos = [
    {
      title: 'Video 1',
      desc: 'Video description goes here',
      id: 'ezbndunlndifonienilanzkdnizn',
      thumbnailSrc: '../../assets/images/a.jpg',
      mediaSrc: '../../assets/images/a.jpg',
      message:""
    },
    {
      title: 'Video 2',
      desc: 'Video description goes here',
      id: 'ezbndunlndifonienssazdnzkdnizn',
      thumbnailSrc: '../../assets/images/a.jpg',
      mediaSrc: '../../assets/images/a.jpg'
    },
    {
      title: 'Video 3',
      desc: 'Video description goes here',
      id: 'ezbndunlndifonienfdsilanzkdnizn',
      thumbnailSrc: '../../assets/images/a.jpg',
      mediaSrc: '../../assets/images/a.jpg'
    },
    {
      title: 'Video 4',
      desc: 'Video description goes here',
      id: 'ezbndunlndifonienfdssssazdnzkdnizn',
      thumbnailSrc: '../../assets/images/a.jpg',
      mediaSrc: '../../assets/images/a.jpg'
    },
    {
      title: 'Video 5',
      desc: 'Video description goes here',
      id: 'ezbndunlndifonienilgefdsanzkdnizn',
      thumbnailSrc: '../../assets/images/a.jpg',
      mediaSrc: '../../assets/images/a.jpg'
    },
    {
      title: 'Video 6',
      desc: 'Video description goes here',
      id: 'ezbndunlndifonienssrefdazdnzkdnizn',
      thumbnailSrc: '../../assets/images/a.jpg',
      mediaSrc: '../../assets/images/a.jpg'
    }
  ]

  public favourites = ['']

  isfavourite(videoId: String) {
    return this.favourites.filter(v => v == videoId).length == 1 ? true : false;
  }

  removeFavourite(videoId: string) {
    this.favourites.splice(this.favourites.indexOf(videoId), 1);
  }

  setFavourite(videoId: string) {
    this.favourites.push(videoId);
  }

  // @ViewChild(MatPaginator) paginator: MatPaginator;

  // constructor() { this.paginator = new MatTableDataSource();
  // }

  // ngAfterViewInit() {
  //   this.paginator = this.paginator;
  // }
  // applyFilter(event: Event) {
  //   if (this.paginator) {
  //     this.paginator.firstPage();
  //   }
  // }
}
