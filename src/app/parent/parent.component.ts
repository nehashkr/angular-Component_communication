import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
@Output() parentFunction:EventEmitter<any>= new EventEmitter()
  constructor() { }

  ngOnInit(): void {
    
  }
  proSelected:boolean=false;
  selProduct:string;
  addedProduct:any;
  
 
  onSelectProduct(product:any){
    this.proSelected = true;
    this.selProduct = product;
  }
  onAddedProduct(proData){
    this.addedProduct = proData;

  }
  

}
