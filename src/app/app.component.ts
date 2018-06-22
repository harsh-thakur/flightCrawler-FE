import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Plan My Flight';

  source_name: String
  dest_name: String
  from_date: String
  to_date: String
  oneWay: Boolean = false
  duration: Number
  direct: Boolean = false
  max_price: Number
  agg_mode: String



  constructor(private ds: DataService){

  }
  ngOnInit(){
    // $(document).ready(function () {
    //   $('.datepicker').datepicker();
    // });
  }
  onSubmit() {
    // console.log(this.source_name + ":" + this.dest_name + ":" + this.oneWay + ":" + this.from_date + ":" + this.to_date + ":" + this.duration + ":" + this.direct + ":" + this.max_price + ":" + this.agg_mode);
 
    
  }
  getCityCodes(){
    console.log('fnn calld');
    
    this.ds.getCityCodes(this.source_name).
      subscribe(() => {
      console.log('success');
      });
  }
}