import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  getmesssage(){
    return "hello world";
  }

  constructor() { }
}
