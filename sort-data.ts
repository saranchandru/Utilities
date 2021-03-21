import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class HelperService {
  public sortData = (data = [], sortBy, sortType = 'string', orderBy = 'ASC') => {
    return data.sort((a, b) => {
      let firstValue = a[sortBy];
      let secondValue = b[sortBy];
      if (sortType === 'date') {
        firstValue = new Date(firstValue);
        secondValue = new Date(secondValue);
      }
      if (orderBy === 'ASC') {
        if (firstValue < secondValue) { return -1; }
        else if (firstValue > secondValue) { return 1; }
      } else {
        if (firstValue > secondValue) { return -1; }
        else if (firstValue < secondValue) { return 1; }
      }
      return 0;
    });
  }
}
