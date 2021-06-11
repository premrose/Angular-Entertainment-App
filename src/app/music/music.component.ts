import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.css']
})
export class MusicComponent implements OnInit {
  public music = [
    {
    title: 'Musics 1',
    desc: 'Musics description goes here',
    id: 'aezbndunlndifonienssrefdazdnzkdnizn',
    thumbnailSrc: '../../assets/images/a.jpg',
    mediaSrc: '../../assets/images/a.jpg'
  },
  {
    title: 'Musics 2',
    desc: 'Musics description goes here',
    id: 'bezbndunlndifonienssrefdazdnzkdnizn',
    thumbnailSrc: '../../assets/images/a.jpg',
    mediaSrc: '../../assets/images/a.jpg'
  },
  {
    title: 'Musics 3',
    desc: 'Musics description goes here',
    id: 'cezbndunlndifonienssrefdazdnzkdnizn',
    thumbnailSrc: '../../assets/images/a.jpg',
    mediaSrc: '../../assets/images/a.jpg'
  },
  {
    title: 'Musics 4',
    desc: 'Musics description goes here',
    id: 'dezbndunlndifonienssrefdazdnzkdnizn',
    thumbnailSrc: '../../assets/images/a.jpg',
    mediaSrc: '../../assets/images/a.jpg'
  },
  {
    title: 'Musics 5',
    desc: 'Musics description goes here',
    id: 'eezbndunlndifonienssrefdazdnzkdnizn',
    thumbnailSrc: '../../assets/images/a.jpg',
    mediaSrc: '../../assets/images/a.jpg'
  },
  {
    title: 'Musics 6',
    desc: 'Musics description goes here',
    id: 'fezbndunlndifonienssrefdazdnzkdnizn',
    thumbnailSrc: '../../assets/images/a.jpg',
    mediaSrc: '../../assets/images/a.jpg'
  }
]

public favourites = ['aezbndunlndifonienilanzkdnizn',]

  constructor() { }

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
