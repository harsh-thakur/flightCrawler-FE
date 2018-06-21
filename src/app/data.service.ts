import { Injectable } from '@angular/core';

import { Http } from '@angular/http';
import { environment } from '../environments/environment';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';

@Injectable()
export class DataService {

  constructor(private http: Http) { }

  getCityCodes(value: any) {
    console.log('srvice ', value);

    return this.http.post(environment.USER_SERVER + '/getCityCodes', {value: value}).map((res) => {
      let data = res.json();
      console.log('data', data);

      return data || {};
    }).catch((error: any) => {
      return error;
    });

  }


}
