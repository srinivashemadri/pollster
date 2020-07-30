import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from 'angularfire2'
import { AngularFireAuthModule } from 'angularfire2/auth'
import { AngularFireStorageModule } from 'angularfire2/storage'
import { AngularFirestoreModule } from 'angularfire2/firestore'
import {environment} from '../environments/environment.prod'
import { MatButtonModule,MatDialogModule, MatCardModule, MatInputModule, MatProgressSpinnerModule, MatProgressBarModule } from '@angular/material';

import { FormsModule} from '@angular/forms';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { CreatepollComponent } from './createpoll/createpoll.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ViewpollsComponent } from './viewpolls/viewpolls.component';
import { ProfileComponent } from './profile/profile.component';
import { DetailedpollComponent } from './detailedpoll/detailedpoll.component';
import { DisplaymodalComponent } from './displaymodal/displaymodal.component';
import { PathnotfoundComponent } from './pathnotfound/pathnotfound.component'
const config = environment.firebaseConfig

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    SignupComponent,
    HomeComponent,
    CreatepollComponent,
    DashboardComponent,
    ViewpollsComponent,
    ProfileComponent,
    DetailedpollComponent,
    DisplaymodalComponent,
    PathnotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(config),AngularFireAuthModule,AngularFireStorageModule,AngularFirestoreModule,
    MatButtonModule, MatDialogModule,MatCardModule, MatInputModule, MatProgressSpinnerModule,MatProgressBarModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents : [DisplaymodalComponent]
})
export class AppModule { }
