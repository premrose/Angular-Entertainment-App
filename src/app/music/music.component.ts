import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.css']
})
export class MusicComponent implements OnInit {

  constructor(private authenticationservice : AuthenticationService, private http: HttpClient){ }

  public music = [
    {
    title: 'Music 1',
    desc: 'Music description goes here',
    id: 'aezbndunlndifonienssrefdazdnzkdnizn',
    thumbnailSrc: '../../assets/images/ad.webm',
    mediaSrc: '../../assets/images/ad.webm'
  },
  {
    title: 'Music 2',
    desc: 'Music description goes here',
    id: 'bezbndunlndifonienssrefdazdnzkdnizn',
    thumbnailSrc: '../../assets/images/ad.webm',
    mediaSrc: '../../assets/images/ad.webm'
  },
  {
    title: 'Music 3',
    desc: 'Music description goes here',
    id: 'cezbndunlndifonienssrefdazdnzkdnizn',
    thumbnailSrc: '../../assets/images/ad.webm',
    mediaSrc: '../../assets/images/ad.webm'
  },
  {
    title: 'Music 4',
    desc: 'Music description goes here',
    id: 'dezbndunlndifonienssrefdazdnzkdnizn',
    thumbnailSrc: '../../assets/images/ad.webm',
    mediaSrc: '../../assets/images/ad.webm'
  },
  {
    title: 'Music 5',
    desc: 'Music description goes here',
    id: 'eezbndunlndifonienssrefdazdnzkdnizn',
    thumbnailSrc: '../../assets/images/ad.webm',
    mediaSrc: '../../assets/images/ad.webm'
  },
  {
    title: 'Music 6',
    desc: 'Music description goes here',
    id: 'fezbndunlndifonienssrefdazdnzkdnizn',
    thumbnailSrc: '../../assets/images/ad.webm',
    mediaSrc: '../../assets/images/ad.webm'
  },
  {
    title: 'Music 7',
    desc: 'Music description goes here',
    id: 'aezbndunlndivgbhfonienssrefdazdnzkdnizn',
    thumbnailSrc: '../../assets/images/ad.webm',
    mediaSrc: '../../assets/images/ad.webm'
  },
  {
    title: 'Music 8',
    desc: 'Music description goes here',
    id: 'bezbndunlndifoniytgyhjoenssrefdazdnzkdnizn',
    thumbnailSrc: '../../assets/images/ad.webm',
    mediaSrc: '../../assets/images/ad.webm'
  },
  {
    title: 'Music 9',
    desc: 'Music description goes here',
    id: 'cezbndunlndifonienssreftxcfybhinjdazdnzkdnizn',
    thumbnailSrc: '../../assets/images/ad.webm',
    mediaSrc: '../../assets/images/ad.webm'
  },
  {
    title: 'Music 10',
    desc: 'Music description goes here',
    id: 'dezbndunlndifonienssrefdazdnzkdnirdtfgyhujozn',
    thumbnailSrc: '../../assets/images/ad.webm',
    mediaSrc: '../../assets/images/ad.webm'
  },
  {
    title: 'Music 11',
    desc: 'Music description goes here',
    id: 'eezbndunlnditrcybunofonienssrefdazdnzkdnizn',
    thumbnailSrc: '../../assets/images/ad.webm',
    mediaSrc: '../../assets/images/ad.webm'
  },
  {
    title: 'Music 12',
    desc: 'Music description goes here',
    id: 'fezbndunlndifonienssrefdazdnzkdnizn',
    thumbnailSrc: '../../assets/images/ad.webm',
    mediaSrc: '../../assets/images/ad.webm'
  },
  {
    title: 'Music 13',
    desc: 'Music description goes here',
    id: 'aezbndunlndidftuiojipfonienssrefdazdnzkdnizn',
    thumbnailSrc: '../../assets/images/ad.webm',
    mediaSrc: '../../assets/images/ad.webm'
  },
  {
    title: 'Music 14',
    desc: 'Music description goes here',
    id: 'bezbndunlndir5ctbunoifonienssrefdazdnzkdnizn',
    thumbnailSrc: '../../assets/images/ad.webm',
    mediaSrc: '../../assets/images/ad.webm'
  },
  {
    title: 'Music 15',
    desc: 'Music description goes here',
    id: 'cezbndunlndidcybujmpkfonienssrefdazdnzkdnizn',
    thumbnailSrc: '../../assets/images/ad.webm',
    mediaSrc: '../../assets/images/ad.webm'
  },
  {
    title: 'Music 16',
    desc: 'Music description goes here',
    id: 'dezbndunlndifonienssrdctgbhjiefdazdnzkdnizn',
    thumbnailSrc: '../../assets/images/ad.webm',
    mediaSrc: '../../assets/images/ad.webm'
  },
  {
    title: 'Music 17',
    desc: 'Music description goes here',
    id: 'eezbndunlndi5exthujyvbuipfonienssrefdazdnzkdnizn',
    thumbnailSrc: '../../assets/images/ad.webm',
    mediaSrc: '../../assets/images/ad.webm'
  },
  {
    title: 'Music 18',
    desc: 'Music description goes here',
    id: 'fezbndunlndifonienssrefdxtcrvybunmiopazdnzkdnizn',
    thumbnailSrc: '../../assets/images/ad.webm',
    mediaSrc: '../../assets/images/ad.webm'
  }
]

public favourites = ['aezbndunlndifonienssrefdazdnzkdnizn',]

  ngOnInit(): void {
  }
  isfavourite(musicId: String) {
    return this.favourites.filter(v => v == musicId).length == 1 ? true : false;
  }

  removeFavourite(musicId: string) {
    this.favourites.splice(this.favourites.indexOf(musicId), 1);
  }

  setFavourite(musicId: string) {
    this.favourites.push(musicId);
  }


}
