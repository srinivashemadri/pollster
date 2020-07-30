import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFireAuth } from 'angularfire2/auth';
import { ModalService } from '../modal.service';
import { MatDialog } from '@angular/material';
import { DisplaymodalComponent } from '../displaymodal/displaymodal.component';

@Component({
  selector: 'app-detailedpoll',
  templateUrl: './detailedpoll.component.html',
  styleUrls: ['./detailedpoll.component.css']
})
export class DetailedpollComponent implements OnInit {

  constructor(private dialog: MatDialog,public ms:ModalService,private ar:ActivatedRoute, private db: AngularFirestore, private auth: AngularFireAuth) { }
  options:Object[]=[]
  question:string;
  curruseremail: string
  createremail:string
  isLoading: boolean = false;
  uid:string;
  viewwhovoted:boolean = false;
  listwhovoted:Object[] = [];
  Totalcount:number = 0;
  pollfound:boolean;
  
  

  ngOnInit() {
    this.ar.paramMap.subscribe((param)=>{
      this.uid = param.get('uid');
      this.isLoading = true
      this.db.collection("polls").doc(this.uid).get().subscribe((result)=>{
        this.isLoading = false
        
        if(result.data()== null){
          this.pollfound= false
        }
        else{
          this.pollfound = true;
            this.curruseremail = this.auth.auth.currentUser == null ? '' : this.auth.auth.currentUser.email
          this.options = result.get('options');
          this.options.forEach((option)=>{
            this.Totalcount += option['votecount'];
          })
          this.question = result.get('question');
          this.createremail = result.get('email');
        }
        
      })

    })
  }

  async votethisopt(index:String){

    if(this.curruseremail==''){
      alert("Please login to vote this poll")
    }
    else{
      let isuserhavearighttovote = true;
      await this.db.collection("polls").doc(this.uid).collection("whovotedforthispoll").get().subscribe((result)=>{
        result.docs.forEach((doc)=>{

          if(this.curruseremail == doc.id){
            isuserhavearighttovote = false;
          }
        })

        if(isuserhavearighttovote){
          this.isLoading = true;
          for(let i=0;i<this.options.length;i++){
            if(this.options[i]['index'] == index){
              this.options[i]['votecount'] +=1;
              this.Totalcount = this.Totalcount +1
            }
          }
          const obj = {
            'email': this.createremail,
            'options': this.options,
            'question': this.question
          }
          this.db.collection("polls").doc(this.uid).set(obj).then(()=>{
            this.isLoading = false;
            alert("Your vote has been registered");
          })
          this.db.collection("polls").doc(this.uid).collection("whovotedforthispoll").doc(this.curruseremail).set({})
        }
        else{
          alert("You have already voted for this poll, you can't vote for twice")
        }

        
      })
      
      
      
    }
  }

  viewlistwhovoted(){

    
    
    this.viewwhovoted = !this.viewwhovoted;

    if(this.viewwhovoted){
      this.isLoading = true;
      let emptyarray = []
      this.listwhovoted = emptyarray
      this.db.collection("polls").doc(this.uid).collection("whovotedforthispoll").get().subscribe((result)=>{
        result.docs.forEach((doc)=>{
          this.listwhovoted.push(doc.id);
        })
        
        this.isLoading = false;
      })
    }
    


  }

  showmodal(){

    this.ms.write('Share this link', "https://pollster-692b8.web.app/poll/"+this.uid);
    this.dialog.open(DisplaymodalComponent)

  }

}
