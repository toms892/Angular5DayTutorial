import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cts-fordirective',
  templateUrl: './fordirective.component.html',
  styleUrls: ['./fordirective.component.css']
})
export class FordirectiveComponent implements OnInit {

  friends:string[]=['avisek', 'manish','brejendra', 'ankit','manish','ashutosh','nandkishore', 'subhranshu','sonali','ramesh','tom','madhu','vinay kumar','gopesh','govindhu']

  scores = [41, 31, 21, 51 , 61, 2, 5, 1]

  locations = [
    {
      city:"Chennai",
      code:"044"
    },
    {
      city:"Bengaluru",
      code:"080"
    },
    {
      city:"Jodhpur",
      code:"0291"
    },
    {
      city:"Japan",
      code:"0081"
    }
  ]

  display:boolean=false

  check = "prafful"

  salary = 8888

  birthday = new Date()

  constructor() { }

  ngOnInit() {
  }

}
