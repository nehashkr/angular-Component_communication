import { Component, OnInit } from '@angular/core';
import { MessageService} from '../appServices/message.service'

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  btnClick(){
    const msgService = new MessageService();
    msgService.messageAlert();
  }

}
