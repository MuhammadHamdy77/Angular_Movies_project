import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'semore2'
})
export class Semore2Pipe implements PipeTransform {

  transform(desc:string , limit:number): any {
    return desc.substr(0,limit)
  }

}
