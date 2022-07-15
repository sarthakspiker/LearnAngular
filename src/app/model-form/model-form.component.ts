import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-model-form',
  templateUrl: './model-form.component.html',
  styleUrls: ['./model-form.component.css']
})
export class ModelFormComponent implements OnInit {

  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {}
  
  // userForm = new FormGroup({
  //   userName:new FormControl('', [Validators.required, Validators.pattern('[a-z]{5,15}')])
  // })
  userForm = this.formBuilder.group({
    userName:['', [Validators.required, Validators.pattern('[a-z]{5,15}')]],

    address:this.formBuilder.group({
      city:['', [Validators.required, Validators.pattern('[a-z]{5,15}')]],
    })
  })
  sendData(){
    console.log(this.userForm.value)
  }

}
