import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private auth: AngularFireAuth) { }

  ngOnInit() {
  }

  signinwithgoogle(){
    console.log("siginwithgoogle")
    var provider = new firebase.auth.GoogleAuthProvider();
    this.auth.auth.signInWithPopup(provider).then((user)=>{
      console.log(user);

    });
  }
}
