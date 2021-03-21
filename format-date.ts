import { Injectable } from '@angular/core';
import { DatePipe } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class HelperService {
  constructor(
    private datePipe: DatePipe,
  ) { }

  public getFormattedDate = (param: string | Date, format: string): string => {
    if (!param || !format) { return ''; }
    const dateParam = typeof param === 'string' ? param.replace(/-/gi, '/') : param;
    return this.datePipe.transform(dateParam, format);
  }
}
