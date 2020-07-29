import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore } from 'angularfire2/firestore';

@Component({
  selector: 'app-createpoll',
  templateUrl: './createpoll.component.html',
  styleUrls: ['./createpoll.component.css']
})
export class CreatepollComponent implements OnInit {

  constructor(private auth: AngularFireAuth, private db: AngularFirestore) { }

  polloptions:Object[] =[];

  Question:String ="";
  currentoption: String ="";
  user;
  isLoading:boolean= false;

  ngOnInit() {
    this.isLoading= true;
    this.auth.authState.subscribe((user)=>{
      this.user = user;
      this.isLoading= false;
    })
  }

  addoption(){
    if(this.currentoption!=""){

      if(this.polloptions.length<10){
        let obj={
          'index': Date.now(),
          'optionvalue': this.currentoption
        }
        this.currentoption=""
        this.polloptions.push(obj);
      }
      else{
        alert("You can only add upto 10 options")
      }
    }
  }

  deletethisoption(index: String){
    this.polloptions = this.polloptions.filter((option)=>{
      return option["index"] == index? false: true
    })
  }

  savepoll(){
    const obj ={
      'question': this.Question,
      'options': this.polloptions
    }
    const ts = Date.now();
    this.isLoading= true;
    this.db.collection("pollcreaters").doc(this.auth.auth.currentUser.uid).collection("polls").doc(ts.toString()).set(obj).then(()=>{
      this.isLoading= false;
    });
  }

}
