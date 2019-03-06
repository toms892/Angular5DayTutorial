import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";


@Component({
  selector: 'cts-reactiveforms',
  templateUrl: './reactiveforms.component.html',
  styleUrls: ['./reactiveforms.component.css']
})
export class ReactiveformsComponent implements OnInit {

  reactiveForm:any

  fName = ""
  lName = ""
  hobby = ""

  constructor() { }

  addHobby = function(hf){
    console.log(hf)
  }

  ngOnInit() {
    this.reactiveForm = new FormGroup({
      fName:new FormControl("", Validators.compose([
                                                      Validators.required,
                                                      Validators.minLength(3),
                                                      Validators.pattern('^[a-zA-Z]+$')
                                                  ])),
      lName:new FormControl("", this.lastNameValidator ),
      hobby:new FormControl()
    })
 
  }

  lastNameValidator = function(control){
    console.log(control)
    if(control.value.length < 4){
      return {'lName':true}
    }
  }






}
