import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'strLength'
})
export class StrLengthPipe implements PipeTransform {

  transform(value: string = '', offset: number = 0): unknown {
    return value.length;
  }

}
