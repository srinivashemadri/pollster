import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore } from 'angularfire2/firestore';
import { MatDialog } from '@angular/material';
import { ModalService } from '../modal.service';
import { DisplaymodalComponent } from '../displaymodal/displaymodal.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-createpoll',
  templateUrl: './createpoll.component.html',
  styleUrls: ['./createpoll.component.css']
})
export class CreatepollComponent implements OnInit {

  constructor(private router: Router,private dialog: MatDialog,public ms:ModalService,private auth: AngularFireAuth, private db: AngularFirestore) { }

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
          'optionvalue': this.currentoption,
          'votecount': 0
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
    
    this.polloptions =  this.polloptions.filter((option)=>{
      return option["index"] != index ? true : false
    })
  }

  async savepoll(){
    const obj ={
      'question': this.Question,
      'options': this.polloptions,
      'email': this.auth.auth.currentUser.email
    }
    
    const ts = Date.now();
    this.isLoading= true;
    await this.db.collection("pollcreaters").doc(this.auth.auth.currentUser.uid).collection("polls").doc(ts.toString()).set({'question': this.Question}).then(()=>{
      
    });
    this.db.collection("polls").doc(ts.toString()).set(obj).then(()=>{
      this.isLoading= false;
      
      this.ms.write('Poll created successfully, you can check your poll in VIEW POLLS SECTION', "https://pollster-692b8.web.app/poll/"+ts.toString());
      this.dialog.open(DisplaymodalComponent)
      this.Question=""
      let empty = []
      this.polloptions = empty
      this.currentoption =""
    });

  }

}
