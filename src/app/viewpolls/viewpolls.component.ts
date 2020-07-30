import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-viewpolls',
  templateUrl: './viewpolls.component.html',
  styleUrls: ['./viewpolls.component.css']
})
export class ViewpollsComponent implements OnInit {

  constructor(private db: AngularFirestore, private router: Router,private auth: AngularFireAuth) { }

  isLoading:boolean = false;

  viewpolls:Object[] = []


  ngOnInit() {
    this.isLoading = true;

    this.auth.authState.subscribe((user)=>{
      
      this.db.collection("pollcreaters").doc(user.uid).collection("polls").get().subscribe((result)=>{
        this.isLoading = false;
        result.docs.forEach((document)=>{
          let obj ={
            'uid': document.id,
            'question': document.get('question')
          }
          this.viewpolls.push(obj);
        })
      })
    })

    

  }

  viewthispoll(uid: String){
    this.router.navigate(['/poll/'+uid]);
  }

  async deletethispoll(uid: string){

    await this.db.collection("pollcreaters").doc(this.auth.auth.currentUser.uid).collection("polls").doc(uid).delete();
    this.db.collection("polls").doc(uid).delete().then(()=>{
      alert("This poll has been Deleted successfully");
      this.viewpolls = this.viewpolls.filter((poll)=>{
        return poll['uid']==uid ? false : true
      })
      
    })
  }



}
