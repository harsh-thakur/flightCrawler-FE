import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class DataService {

  myMethod1: Observable<any>;
    private myMethodSubject = new Subject<any>();

    constructor() {
        this.myMethod1 = this.myMethodSubject.asObservable();
    }

    myMethod(data) {
        console.log('in service: '+ data); 
        this.myMethodSubject.next(data);
    }

}
