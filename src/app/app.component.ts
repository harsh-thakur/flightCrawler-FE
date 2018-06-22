import { Component, OnInit, AfterViewInit } from '@angular/core';
import { DataService } from './data.service';
import { DatePipe } from '@angular/common';
declare const $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'Plan My Flight';

  source_name: string
  dest_name: string
<<<<<<< HEAD
=======
  from_date: string
  loading: boolean;
  to_date: string
  oneWay: Boolean = false
  duration: Number
  direct: Boolean = false
  max_price: Number
  agg_mode: string
>>>>>>> a7f9d292d76efcc2b2d7f2aa8e34e1f9173cdd62
  airLines: any;

  destCode: any;
  originCode: any;

  destination: string;
  source: string;
  date: string;
  totalRecord: any;
  cityObj: any;
  airportObj: any;
  flag: boolean = false;
  loading: boolean = false;
  minTravelDate:any;

  constructor(private ds: DataService, private datePipe: DatePipe) {
    this.destination = '';
    this.source = '';
    this.date = '';
    this.loading = false;
    this.originCode = '';
    this.destCode = '';
<<<<<<< HEAD
    this.minTravelDate = this.getDate(new Date());
=======

>>>>>>> a7f9d292d76efcc2b2d7f2aa8e34e1f9173cdd62
    this.airLines = {
      "AI": 'Air India',
      "9W": 'Jet Airways',
      "6E": 'IndiGo',
      "IX": 'Air India Express',
      "SG": 'SpiceJet',
      "G8": 'GoAir',
      "I5": 'AirAsia India',
      "UK": 'Vistara',
      "9I": 'Alliance Air',
      "2T": 'TruJet',
      "DN": 'Air Deccan',
      "6X": 'Air Odisha',
      "ZO": 'Zoom Air',
      "BZ": 'Blue Dart Aviation',
      "QO": 'Quikjet Airlines',
    }

  }
  ngOnInit() {
<<<<<<< HEAD
  }
  ngAfterViewInit(){
=======
>>>>>>> a7f9d292d76efcc2b2d7f2aa8e34e1f9173cdd62
    $(document).ready(function () {
      $('.datepicker').datepicker();
    });
    // var instance = M.Datepicker.getInstance(elem);
    $('select').material_select();
    // $('.datepicker').datepicker('methodName', paramName);
   $('#travelDate').datepicker({ minDate: new Date() }) 
   
  }

  toTitleCase(str) {
    return str.replace(
      /\w\S*/g,
      function (txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
      }
    );
  }

<<<<<<< HEAD

getDate(date) {

  var dateReceive = new Date(date);


  var day = ("0" + dateReceive.getDate()).slice(-2);
  var month = ("0" + (dateReceive.getMonth() + 1)).slice(-2);

  return dateReceive.getFullYear() + "-" + (month) + "-" + (day);

}
  get(value:any) {
=======
  get(value: any) {
>>>>>>> a7f9d292d76efcc2b2d7f2aa8e34e1f9173cdd62
    this.loading = true;
    this.ds.get(value).subscribe(d => {
      if (d.success === true) {
        this.loading = false;
        this.flag = true;
<<<<<<< HEAD
         this.source = this.toTitleCase(this.source_name);
         this.destination = this.toTitleCase(this.dest_name);
         this.totalRecord = d.data.results;
         console.log(this.totalRecord.length);

        this.totalRecord.forEach(element => {
          element.itineraries.forEach(element => {
            element.outbound.flights.forEach(element => {
              element.departs_at = element.departs_at.split('T');
            });
          });
          
        });


         
        // this.destination = this.airportObj[d.data.DestinationLocation];
        // this.totalRecord = d.data.FareInfo;
        // console.log(this.source, this.destination, this.totalRecord);
=======
        console.log(d);
>>>>>>> a7f9d292d76efcc2b2d7f2aa8e34e1f9173cdd62

        this.source = this.toTitleCase(this.source_name);
        this.destination = this.toTitleCase(this.dest_name);
        this.totalRecord = d.data.results;
        console.log(this.totalRecord);
      }
<<<<<<< HEAD
      else{
=======
      else {
>>>>>>> a7f9d292d76efcc2b2d7f2aa8e34e1f9173cdd62
        this.loading = false;
        alert(d.msg)
      }
    });
  }
  onSubmit() {
    let date = $('#date').val();
<<<<<<< HEAD
    let finaldate = this.datePipe.transform(date,"yyyy-MM-dd")
  
  let obj = {
  origin : this.source_name,
  dest: this.dest_name,
  date: finaldate
  }
  this.get(obj);
    
  
    
    
=======
    let finaldate = this.datePipe.transform(date, "yyyy-MM-dd")

    let obj = {
      origin: this.source_name,
      dest: this.dest_name,
      date: finaldate
    }
    this.get(obj);

>>>>>>> a7f9d292d76efcc2b2d7f2aa8e34e1f9173cdd62
  }
}