import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'stringsort'
})
export class StringsortPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if(args === 'asc'){
    console.log(value)
    return value.sort();
  } else if (args === 'dsc'){
    return value.sort().reverse()
  }

  return value

}
}
