import { Component} from '@angular/core';
import { TestServiceService } from '../services/test-service.service';

@Component({
  selector: 'app-test-employee-table',
  templateUrl: './test-employee-table.component.html',
  styleUrls: ['./test-employee-table.component.css']
})
export class TestEmployeeTableComponent{
  employees:any =[];

  constructor(private testservice:TestServiceService) { 
    this.employees = testservice.getEmployeesList()
  }
}
