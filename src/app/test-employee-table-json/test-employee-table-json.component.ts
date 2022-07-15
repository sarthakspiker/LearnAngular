import { Component, OnInit } from '@angular/core';
import { IEmployee } from '../models/iemployee';
import { ParseEmployeesJsonService } from '../services/parse-employees-json.service';

@Component({
  selector: 'app-test-employee-table-json',
  templateUrl: './test-employee-table-json.component.html',
  styleUrls: ['./test-employee-table-json.component.css']
})
export class TestEmployeeTableJsonComponent {
  employeesJson:IEmployee[]= [];
  errorMsg:any;
  constructor(private empjsonservice:ParseEmployeesJsonService) {
    this.empjsonservice.getEmployeesJson().subscribe(
    result => this.employeesJson = result,
    error => this.errorMsg = error )
  }

}
