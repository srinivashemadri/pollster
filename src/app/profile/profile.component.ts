import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { NgForm } from '@angular/forms';
import { AngularFirestore } from 'angularfire2/firestore';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private auth: AngularFireAuth, private db: AngularFirestore, private router: Router) { }

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

  deleteaccount(){
    var result = confirm("Are you sure, you want to delete your account?")
    if(result == true){
      this.db.collection("pollcreaters").doc(this.auth.auth.currentUser.uid).delete().then(()=>{
        this.auth.auth.currentUser.delete().then(()=>{
          alert("Account deleted successfully, Now you can't able to manage your polls")
          this.router.navigate(['/'])
        })
      })
    }
  }

}
