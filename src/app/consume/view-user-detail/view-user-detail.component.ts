import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestapiService } from 'src/app/services/restapi.service';
import { Observable } from 'rxjs';



@Component({
  selector: 'cts-view-user-detail',
  templateUrl: './view-user-detail.component.html',
  styleUrls: ['./view-user-detail.component.css']
})
export class ViewUserDetailComponent implements OnInit {

  selectedUserId:any

  viewSelectedUser:any



  constructor(private active:ActivatedRoute, private rest:RestapiService) { }

  ngOnInit() {
    console.log(this.active)
    console.log(this.active.snapshot)
    console.log(this.active.snapshot.paramMap)
    console.log(this.active.snapshot.paramMap.get("myid"))
    this.selectedUserId = this.active.snapshot.paramMap.get("myid")

    this.rest.getUserData(parseInt(this.selectedUserId)+1).subscribe((user)=>{
     this.viewSelectedUser = user  
    })


  }




}
