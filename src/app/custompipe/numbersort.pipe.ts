import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numbersort'
})
export class NumbersortPipe implements PipeTransform {
  
  /* sortNumbers = function(a, b){
    return a-b
  }
  transform(value: any, args?: any): any {
    return value.sort(this.sortNumbers);
  }
 */
  transform(value: any, args?: any): any {

    if(args === 'asc'){
        return value.sort((a,b)=>{
          return a-b
        })
    } else if (args === 'dsc'){
        return value.sort((a,b)=>{
          return b-a
        })
    }
    return value
    }
  }
  
  
