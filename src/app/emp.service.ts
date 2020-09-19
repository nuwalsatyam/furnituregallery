import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmpService {

  constructor() { }
  getEmp(){
    return [
      {"id":1,"name":"prince","age":30},
      {"id":2,"name":"devendra","age":20},
      {"id":3,"name":"sachin","age":31},
      {"id":4,"name":"harshal","age":40}
      ];
}
}