import { Injectable } from '@angular/core';
import { Router, ParamMap } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class HelperService {
  constructor(
    private router: Router,
  ) { }

  removeParamFromUrl(paramMap: ParamMap, key: string, route) {
    if (!paramMap.has(key)) { return; }

    const queryParams = {};
    paramMap.keys.filter(k => k !== key).forEach(k => (queryParams[k] = paramMap.get(k)));
    this.router.navigate([], { queryParams, replaceUrl: true, relativeTo: route });
  }
}
