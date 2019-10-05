import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'seemor'
})
export class SeemorPipe implements PipeTransform {

  transform(desc:string , limit:number): any {
    return desc.substr(0 ,limit)
  }

}
