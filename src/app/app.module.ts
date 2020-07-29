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
import { MatButtonModule, MatCardModule, MatInputModule, MatProgressSpinnerModule } from '@angular/material';
import { FormsModule} from '@angular/forms';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component'
const config = environment.firebaseConfig

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(config),AngularFireAuthModule,AngularFireStorageModule,AngularFirestoreModule,
    MatButtonModule, MatCardModule, MatInputModule, MatProgressSpinnerModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
