import { Component, OnInit } from '@angular/core';
import { RestapiService } from 'src/app/services/restapi.service';
import { Router } from '@angular/router';

@Component({
  selector: 'cts-remote-api',
  templateUrl: './remote-api.component.html',
  styleUrls: ['./remote-api.component.css']
})
export class RemoteApiComponent implements OnInit {

  allUsers:any

  searchText =""

  constructor(private rest:RestapiService, private router:Router) { }

  ngOnInit() {
    this.rest.getLocalData().subscribe((res)=>{
      this.allUsers = res
      console.log(this.allUsers)
    })
  }

  viewUser = function(index){
    console.log("User at " + index)
    console.log(this.allUsers[index])
    //navigate to new route
    //this will be called  - http://localhost:4200/viewuser/2
    //                       http://localhost:4200/viewuser/4
    this.router.navigate(["/viewuser", index] )
   }

}
