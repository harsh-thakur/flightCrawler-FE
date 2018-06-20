import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Plan My Flight';
  
  source_name:String
  dest_name:String
  from_date:String
  to_date:String
  oneWay:Boolean = false
  duration:Number
  direct:Boolean = false
  max_price:Number
  agg_mode:String

  onSubmit()
  {
    console.log(this.source_name+":"+this.dest_name+":"+this.oneWay+":"+this.from_date+":"+this.to_date+":"+this.duration+":"+this.direct+":"+this.max_price+":"+this.agg_mode);
  }
}