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
    this.minTravelDate = this.getDate(new Date());


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
  }
  ngAfterViewInit(){
    $(document).ready(function () {
      $('.datepicker').datepicker();
    });

   $('#date').datepicker({ minDate: new Date() }) 
   
  }

  toTitleCase(str) {
    return str.replace(
      /\w\S*/g,
      function (txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
      }
    );
  }


getDate(date) {

  var dateReceive = new Date(date);


  var day = ("0" + dateReceive.getDate()).slice(-2);
  var month = ("0" + (dateReceive.getMonth() + 1)).slice(-2);

  return dateReceive.getFullYear() + "-" + (month) + "-" + (day);

}
  get(value:any) {
    this.loading = true;
    this.ds.get(value).subscribe(d => {
      if (d.success === true) {
        this.loading = false;
        this.flag = true;
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

        this.source = this.toTitleCase(this.source_name);
        this.destination = this.toTitleCase(this.dest_name);
        this.totalRecord = d.data.results;
        console.log(this.totalRecord);
      }
      else {
        this.loading = false;
        alert(d.msg)
      }
    });
  }
  onSubmit() {
    let date = $('#date').val();
    let finaldate = this.datePipe.transform(date, "yyyy-MM-dd")

    let obj = {
      origin: this.source_name,
      dest: this.dest_name,
      date: finaldate
    }
    this.get(obj);

  }
}