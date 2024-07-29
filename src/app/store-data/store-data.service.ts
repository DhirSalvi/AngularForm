import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StoreDataService {

  private formData: any = {};

  constructor() {}

  setFormData(data: any) {
    this.formData = data;
    console.log("********************",this.formData,"*************************")
  }

  getFormData() {
    return this.formData;
  }


}
