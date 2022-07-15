import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-predefined-pipes',
  templateUrl: './test-predefined-pipes.component.html',
  styleUrls: ['./test-predefined-pipes.component.css']
})
export class TestPredefinedPipesComponent {
companyName:string = 'Deloitte'
productPrice:number = 200
productExpDate:any = new Date()
customer:object = {cid:201,cname:'sarthak'}
}
