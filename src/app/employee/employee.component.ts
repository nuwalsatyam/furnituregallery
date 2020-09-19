import { Component, OnInit } from '@angular/core';
import { EmpService } from '../emp.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(private _employee:EmpService) { }
  employees =[];

  ngOnInit(): void {
    this.employees=this._employee.getEmp();
  }

}
