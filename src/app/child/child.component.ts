import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() hero;
  constructor() { }

  ngOnInit(): void {
  }
  @Input() productsSelected:boolean=false;
  @Input() selectedProduct:string;
  @Output() addedProduct:any = new EventEmitter<any>();

  onAddProduct(){
    this.addedProduct.emit( this.selectedProduct);

  }


}
