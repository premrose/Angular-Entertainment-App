import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { VideosComponent } from './videos/videos.component';
import { MusicComponent } from './music/music.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ForgotpassComponent } from './forgotpass/forgotpass.component';
import { FavouritesComponent } from './favourites/favourites.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'home', component: HomeComponent},
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'forgotpass', component: ForgotpassComponent },
  { path: 'videos', component: VideosComponent, canActivate:[AuthGuard]},
  { path: 'music', component: MusicComponent, canActivate:[AuthGuard]},
  { path: 'favourites', component: FavouritesComponent, canActivate:[AuthGuard]},
  {path: '404', component: PagenotfoundComponent},
 {path: '**', redirectTo: '/404'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
