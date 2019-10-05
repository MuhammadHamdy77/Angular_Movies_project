import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(movies:any,term:any): any {
    if( term == undefined){
      return movies;
    }
    return movies.filter(function(movies){
      return movies.original_title.toLowerCase().includes(term.toLowerCase())
    })
  }

}
