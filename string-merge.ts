import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HelperService {
  stringMerge = (value, ...args) => value.replace(/%s/gi, () => args.shift());
}
