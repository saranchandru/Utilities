import { Injectable } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { DEFAULT_NUMBER_FORMAT } from '../constants';

@Injectable({
  providedIn: 'root',
})
export class HelperService {
  constructor(
    private decimalPipe: DecimalPipe,
  ) { }

  public getFormattedNumber = (param: string | number = '', format: string = DEFAULT_NUMBER_FORMAT): string => {
    const numberParam = Number(param);
    if (isNaN(numberParam)) {
      return '';
    } else if (numberParam === 0) {
      return numberParam.toString();
    }
    return this.decimalPipe.transform(numberParam, format);
  }
}
