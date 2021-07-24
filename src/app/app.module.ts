import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { HttpApiComponent } from './http-api/http-api.component';
import { HttpClientModule } from '@angular/common/http';
import { SudofireComponent } from './sudofire/sudofire.component';
import { CardComponent } from './card/card.component';
import { Card1Component } from './card1/card1.component';



@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    HttpApiComponent,
    SudofireComponent,
    CardComponent,
    Card1Component,
    
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
