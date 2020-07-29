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
  isLoading:boolean = false;

  ngOnInit() {

    this.isLoading = true;
    this.auth.authState.subscribe((user)=>{
      this.isLoading = false;
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
