import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'cts-taskmanager',
  templateUrl: './taskmanager.component.html',
  styleUrls: ['./taskmanager.component.css']
})
export class TaskmanagerComponent implements OnInit {

  currentTask=""

  @ViewChild('inputTask') itt:ElementRef 

  tasks=[
          "Plan the weekend!",
          "Plan the weekday break!"
        ]

  addTask = function(){
    console.log(this.currentTask)
    this.tasks.push(this.currentTask)
    this.currentTask = ""
    this.itt.nativeElement.focus()

  }

  changeTaskStatus = function(ct){
    console.log("changing status: " + this.tasks[ct])
    this.tasks.splice(ct,1)
   
  }

  constructor() { }

  ngOnInit() {
  }

}
