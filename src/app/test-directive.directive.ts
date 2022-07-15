import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appTestDirective]'
})
export class TestDirectiveDirective {
  
  //Directive can be used to create custom tag to manupulate some DOM properties
  //It can be applied to HTML tag using selector name <div appTestDirective>
  @HostBinding('style.color') color:string
  constructor(private elementRef:ElementRef) {
    this.color='blue'
    //elementRef.nativeElement.style.color='green';
    elementRef.nativeElement.style.backgroundColor='yellow'
    elementRef.nativeElement.style.display='inline'
   }
   @HostListener('mouseover') onMouseOver(){
     this.color='red'
   }
   @HostListener('mouseleave') onMouseLeave(){
     this.color='green'
   }

}
