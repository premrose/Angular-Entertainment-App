import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { SigninComponent } from './signin/signin.component';
import { LoginComponent } from './login/login.component';
import { VideosComponent } from './videos/videos.component';
import { MusicComponent } from './music/music.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { LogoutComponent } from './logout/logout.component';
import { ForgotpassComponent } from './forgotpass/forgotpass.component';
import { FavouritesComponent } from './favourites/favourites.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'home', component: HomeComponent},
  { path: 'signin', component: SigninComponent },
  { path: 'login', component: LoginComponent },
  { path: 'forgotpass', component: ForgotpassComponent },
  { path: 'videos', component: VideosComponent },
  { path: 'music', component: MusicComponent },
  { path: 'favourites', component: FavouritesComponent },
  { path: 'logout', component: LogoutComponent },
  {path: '404', component: PagenotfoundComponent},
 {path: '**', redirectTo: '/404'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
