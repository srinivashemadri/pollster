import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private auth: AngularFireAuth, private router: Router) { }

  

  ngOnInit() {
    this.auth.authState.subscribe((user)=>{
      
    })
  }

  createnewpoll(){
    this.router.navigate(['/createpoll'])
  }
  viewpolls(){
    this.router.navigate(['/viewpolls'])
  }

}
