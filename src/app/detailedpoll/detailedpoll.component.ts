import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'app-detailedpoll',
  templateUrl: './detailedpoll.component.html',
  styleUrls: ['./detailedpoll.component.css']
})
export class DetailedpollComponent implements OnInit {

  constructor(private ar:ActivatedRoute, private db: AngularFirestore, private auth: AngularFireAuth) { }
  options:Object[]=[]
  question:String;

  isLoading: boolean = false;

  ngOnInit() {
    this.ar.paramMap.subscribe((param)=>{
      const uid = param.get('uid');
      this.isLoading = true
      this.db.collection("polls").doc(uid).get().subscribe((result)=>{
        this.isLoading = false
        console.log(result.data())
        this.options = result.get('options');
        this.question = result.get('question');
      })

    })
  }

}
