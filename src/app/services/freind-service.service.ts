import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FriendServiceService {

  cabService = ['ola','uber','zoom']

  sayHello(){
    return "Welcome to CAB Service API!"
  }

  welcome(){
    console.log("Welcome to CAB Service!")
  }

  constructor() { }
}
