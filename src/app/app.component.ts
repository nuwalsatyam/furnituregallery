import { Component } from '@angular/core';
import {MessageService} from './message.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MyProject';
   constructor(private _messageService:MessageService){
     
   }
 
}
