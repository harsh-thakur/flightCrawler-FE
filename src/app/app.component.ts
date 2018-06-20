import { Component } from '@angular/core';
import { DataService } from './data.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Plan My Flight';
   flight_details =  {
    source_name:'',
  dest_name:'',
  from_date:'',
  to_date:'',
  oneWay:false,
  duration:0,
  direct:false,
  max_price:0,
  agg_mode:'' 
  };
  public constructor(private _dataservice: DataService) {
    
  
}
  

  onSubmit()
  {
    this._dataservice.myMethod(this.flight_details);
    console.log(this.flight_details);
  }
}