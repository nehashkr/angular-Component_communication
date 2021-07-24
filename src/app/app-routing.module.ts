import { SudofireComponent } from './sudofire/sudofire.component';
import { HttpApiComponent } from './http-api/http-api.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { CardComponent } from './card/card.component';
import { Card1Component } from './card1/card1.component';


const routes: Routes = [
  {path: '', redirectTo:'home', pathMatch:'full'},
  {path:'home', component: SudofireComponent},
  {path:'question1', component:HttpApiComponent},
  {path:'question2', component:ParentComponent,
  children: [
    {component:ChildComponent,path:'question2'}
  ]},
  {path:'question3', component:CardComponent,
  children: [
    {component:Card1Component,path:'question3'}
  ]},
  
  
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
