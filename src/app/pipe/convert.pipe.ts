import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convert'
})
export class ConvertPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    if (arg == 'convertHeight') {
      return Number(value)/100;
    }
  }

}
