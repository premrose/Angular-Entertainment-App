import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { HttpClientModule, HttpClientXsrfModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { ToolbarComponent } from './toolbar/toolbar.component';
import { SigninComponent } from './signin/signin.component';
import { LoginComponent } from './login/login.component';
import { VideosComponent } from './videos/videos.component';
import { MusicComponent } from './music/music.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { LogoutComponent } from './logout/logout.component';
import { ForgotpassComponent } from './forgotpass/forgotpass.component';
import { HomeComponent } from './home/home.component';
import { AuthenticationService } from '../app/authentication.service';
import { AuthGuard } from '../app/auth.guard';
import { FavouritesComponent } from './favourites/favourites.component';
import { AuthInterceptor } from './auth.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ToolbarComponent,
    SigninComponent,
    LoginComponent,
    VideosComponent,
    MusicComponent,
    PagenotfoundComponent,
    LogoutComponent,
    ForgotpassComponent,
    FavouritesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpClientXsrfModule.withOptions({
      cookieName: 'My-Xsrf-Cookie',
      headerName: 'My-Xsrf-Header',
    }),
    RouterModule.forRoot([
      { path: '', component: HomeComponent},
      { path: 'home', component: HomeComponent},
      { path: 'signin', component: SigninComponent },
      { path: 'login', component: LoginComponent },
      { path: 'videos', component: VideosComponent },
      { path: 'music', component: MusicComponent },
      { path: 'favourites', component: FavouritesComponent },
      { path: 'logout', component: LogoutComponent },
      { path: 'forgotpass', component: ForgotpassComponent },
      { path: '404', component: PagenotfoundComponent },
      { path: '**', redirectTo: '/404' }
    ]),
  ],
  providers: [AuthenticationService,AuthGuard,{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
