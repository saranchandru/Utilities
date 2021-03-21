import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'removeComma'
})
export class RemoveCommaPipe implements PipeTransform {
  transform = (value = ''): string => value.replace(/,/g, '');
}
