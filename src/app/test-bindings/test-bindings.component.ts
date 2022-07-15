import { stringify } from '@angular/compiler/src/util';
import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-test-bindings',
  templateUrl: './test-bindings.component.html',
  styleUrls: ['./test-bindings.component.css']
})
export class TestBindingsComponent implements OnInit {
  CompanyName:string = 'Deloitte'
  outcome:number = 0
  constructor() { }

  ngOnInit(): void {}

  welcomeToCompany():string{
    return `Welcome to ${this.CompanyName}!`
  }
  company ={
    name:'deloitte',
    url:'https://www2.deloitte.com/us/en.html',
    logo:'http://getsureinfotech.appspot.com/images/GetSure.jpg'
  }
  addOperation(fno:string, sno:string){
    

    this.outcome = Number(fno) + Number(sno)
  }
}
