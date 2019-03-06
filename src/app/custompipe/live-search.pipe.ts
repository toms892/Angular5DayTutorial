import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'liveSearch'
})
export class LiveSearchPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    //console.log("I am in pipe")
    //console.log(value)
    if(args === ""){
      return value
    }

    console.log("I am just outside filter")
    console.log(value.filter(v=>v.username.toLowerCase().includes(args.toLowerCase())))

    return value.filter(function(v){
      //console.log("I am in filter")
      //console.log(v)
      return v.username.toLowerCase().includes(args.toLowerCase())
    })
    
  }

}
