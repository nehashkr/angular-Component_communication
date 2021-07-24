import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sudofire';
  data={
    name:'Rounak',
    age:24,
    email:'rounaks62@gmail.com'
  }
  parentFunction(data)
  {
    console.log(data)
  }
}
