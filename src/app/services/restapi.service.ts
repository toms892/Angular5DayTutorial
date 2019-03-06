import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class RestapiService {

  constructor(private myhttp:HttpClient) { }

  getRemoteData(){
    return this.myhttp.get("https://jsonplaceholder.typicode.com/users")
  }

  getLocalData(){
    return this.myhttp.get("http://localhost:3000/users")
  }

  getUserData(id){
    return this.myhttp.get("http://localhost:3000/users/"+id)
  }


}
