import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  title = 'pollster';
  user;

  ngOnInit(){
    this.auth.authState.subscribe((user)=>{
      this.user = user;
      
      
    })
  }

  logout(){
    this.auth.auth.signOut();
    this.router.navigate(['']);
  }

  constructor(public auth: AngularFireAuth, private router: Router){

  }
  
}
