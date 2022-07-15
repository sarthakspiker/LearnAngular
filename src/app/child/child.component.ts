import { Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @Input() cAmount:any;

  @Output() change:EventEmitter<number> = new EventEmitter<number>()

  increment(){
    this.cAmount++;
    this.change.emit(this.cAmount)
  }
  decrement(){
    this.cAmount--;
    this.change.emit(this.cAmount)
  }

}