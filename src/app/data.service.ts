import { Injectable } from '@angular/core';

import { Http } from '@angular/http';
import { environment } from '../environments/environment';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs';

@Injectable()
export class DataService {

  constructor(private http: Http) { }

  // getCityCodes(value: any) {
  //   console.log('srvice ', value);
  //   return this.http.post(environment.USER_SERVER + '/getCityCodes', {value: value}).map((res) => {
  //     let data = res.json();
  //     console.log('data', data);
  //     return data || {};
  //   }).catch((error: any) => {
  //     return error;
  //   });
  // }
  get(value){
    // return this.http.post('https://flightcrawler-be-wskpjrygvp.now.sh/api' + '/get', value).map(
     return this.http.post(environment.USER_SERVER + '/get', value).map( 
    (response) => response.json())
      .catch(e => {
        if (e.status === 401) {
          console.log('Error');
        }
        return [];
      });
  }


}