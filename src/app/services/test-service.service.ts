import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestServiceService {
getEmployeesList(){
return[
  {empId:101,empName:'Ram',salary:20000},
  {empId:102,empName:'Shyam',salary:40000},
  {empId:103,empName:'Anonymous',salary:80000}
]
}
}
