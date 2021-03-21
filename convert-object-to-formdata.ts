import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class HelperService {
  public convertObjectToFormData = (item) => {
    const formData = new FormData();
    for (const key of Object.keys(item)) {
      formData.append(key, item[key]);
    }
    return formData;
  }
}
