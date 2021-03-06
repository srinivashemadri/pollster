import { Component, OnInit, NgZone } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private auth: AngularFireAuth, private router: Router,private zone: NgZone) { }
  fgtpwdclicked: boolean= false;
  email: string;

  ngOnInit() {
  }

  signinwithgoogle(){
    
    var provider = new firebase.auth.GoogleAuthProvider();

    this.auth.auth.signInWithPopup(provider).then((user)=>{
      this.zone.run(()=>{
        
        this.router.navigate(['/dashboard']);
      })
      
    });
  }

  siginwithemailandpassword(Form: NgForm){
    if(Form.valid){
      this.auth.auth.signInWithEmailAndPassword(Form.value.email, Form.value.password).then((result)=>{
        if(result.user.emailVerified){
          
          this.router.navigate(['/dashboard']);
        }
        else{
          alert("Please verify your email before logging in")
          this.auth.auth.signOut();
          
        }
      }).catch((err)=>{
        alert(err.message)
      })
    }
  }

  sendfgtpwdlink(){
    
    this.auth.auth.sendPasswordResetEmail(this.email).then(()=>{
      
      alert("Password reset link sent successfully")
    }).catch((err)=>{
      alert(err.message)
    })

  }
  

  

}
