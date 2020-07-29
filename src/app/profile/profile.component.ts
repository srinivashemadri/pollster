import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private auth: AngularFireAuth) { }

  user;

  ngOnInit() {

    this.auth.authState.subscribe((user)=>{
      this.user = user;
    })

  }

  updateprofile(Form: NgForm){

    if(Form.valid){
      this.auth.auth.currentUser.updateProfile({displayName: Form.value.name}).then(()=>{
        alert("Profile updated successfully");
      })
    }

  }

}
