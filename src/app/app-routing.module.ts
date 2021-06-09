import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SigninComponent } from './signin/signin.component';
import { LoginComponent } from './login/login.component';
import { VideosComponent } from './videos/videos.component';
import { MusicComponent } from './music/music.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const routes: Routes = [
  { path: 'signin', component: SigninComponent },
  { path: 'login', component: LoginComponent },
  { path: 'videos', component: VideosComponent },
  { path: 'music', component: MusicComponent },
  { path: '**', component: PagenotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
