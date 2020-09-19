import { Component, OnInit ,Input} from '@angular/core';
import { EmpService } from '../emp.service';

@Component({
  selector: 'app-codevolution',
  templateUrl: './codevolution.component.html',
  styleUrls: ['./codevolution.component.css']
})
export class CodevolutionComponent implements OnInit {
  color="red"
  colors=["blue","red","yellow","black"]
  constructor(private codevolution:EmpService) { }
  public bring="";
  public name="";
  @Input() parentdata;
 logMessage(input)
  {
  console.log(input.value)
   this.bring=input.value;
  }
  ngOnInit(): void {
    this.codevolutions=this.codevolution.getEmp();
  }

  codevolutions =[];
}
