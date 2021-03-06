import { Component, OnInit, NgZone } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { NgForm } from '@angular/forms';
import { AngularFirestore } from 'angularfire2/firestore';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private auth: AngularFireAuth,private db: AngularFirestore, private router: Router,private zone: NgZone) { }

  ngOnInit() {

    
  }

  signinwithgoogle(){
    var provider = new firebase.auth.GoogleAuthProvider();
    this.auth.auth.signInWithPopup(provider).then((result)=>{
      this.zone.run(()=>{
        this.router.navigate(['/dashboard']);
      })
      
    })
    
  }
  signinwithemailandpassword(Form: NgForm){

    if(Form.valid){
      if(Form.value.password == Form.value.cf_password){

        this.auth.auth.createUserWithEmailAndPassword(Form.value.email, Form.value.password).then((result)=>{
          
          result.user.updateProfile({displayName: Form.value.firstname + " "+ Form.value.lastname});
          this.db.collection("pollcreaters").doc(result.user.uid).set({
            'email': result.user.email,
            'displayName': result.user.displayName
          })
          result.user.sendEmailVerification().then(()=>{
            alert("Please verify your email to login");
            this.auth.auth.signOut();
            this.router.navigate(['/signin']);
          })
        }).catch((err)=>{
          alert(err.message);
        })
      }
    }
  }
}
