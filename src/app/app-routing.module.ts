import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreatepollComponent } from './createpoll/createpoll.component';
import { ViewpollsComponent } from './viewpolls/viewpolls.component';
import { DetailedpollComponent } from './detailedpoll/detailedpoll.component';
import { AuthGuard } from './auth.guard';
import { PathnotfoundComponent } from './pathnotfound/pathnotfound.component';



const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'signin', component: SigninComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'dashboard', component: DashboardComponent , canActivate:[AuthGuard]},
  {path: 'createpoll', component: CreatepollComponent,canActivate:[AuthGuard]},
  {path: 'viewpolls', component: ViewpollsComponent, canActivate:[AuthGuard]},
  {path: 'poll/:uid', component: DetailedpollComponent},
  {path: '**', component: PathnotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
