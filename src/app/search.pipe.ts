import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(hamada:any[] , term:string): any[] {

    return     hamada.filter((item) =>  item.title.toLowerCase().includes(term.toLowerCase())        )
    ;
  }

}
