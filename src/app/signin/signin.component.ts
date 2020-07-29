import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

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
