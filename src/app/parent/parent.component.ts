import { Component} from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  pAmount:number = 10;
  amoutChange(data:any){
     this.pAmount=data
  }
}