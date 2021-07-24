import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-http-api',
  templateUrl: './http-api.component.html',
  styleUrls: ['./http-api.component.css']
})
export class HttpApiComponent implements OnInit {

  constructor(private http:HttpClient) { }
  
  git:any = [];
  omdb : any = [];

  

  ngOnInit(): void {

    this.http.get("https://api.github.com/users").subscribe(data => 
    {
      this.git= data;
    },
    error => {console.log(error);},
    
    () => {console.log("data is fetched succesfully");} 

    )

    this.http.get<any>("http://jsonplaceholder.typicode.com/todos/").subscribe(movie =>
    {
      this.omdb = movie;
    })

    
    
  }

}
