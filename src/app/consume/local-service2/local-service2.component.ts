import { Component, OnInit } from '@angular/core';
import { FriendServiceService } from 'src/app/services/freind-service.service';

@Component({
  selector: 'cts-local-service2',
  templateUrl: './local-service2.component.html',
  styleUrls: ['./local-service2.component.css']
})
export class LocalService2Component implements OnInit {

  vendors = []

  constructor(private ls:FriendServiceService) { }

  ngOnInit() {
    this.vendors = this.ls.cabService
    this.ls.cabService.push("local")
  }

}
