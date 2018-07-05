import { Component, OnInit, AfterViewInit } from '@angular/core';
import { DataService } from './data.service';
import { DatePipe } from '@angular/common';
import { Angular2Csv } from 'angular2-csv/Angular2-csv';
import { environment } from '../environments/environment';
declare const $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,AfterViewInit {
  private allItems: {};
  option: boolean = true;
  source_name: string
  dest_name: string
  airLines: any;
  total_price: any;
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
  minTravelDate: any;
  data1: any;
  obj2: any;
  obj1: any;
  csvObj: any = new Array();
  finaldate: any;
  airDropDown: any;
  myRadio: any;
  returnDate: any;
  preferedAir: any;

  constructor(private ds: DataService, private datePipe: DatePipe) {
    this.destination = '';
    this.source = '';
    this.date = '';
    this.loading = false;
    this.originCode = '';
    this.destCode = '';
    this.preferedAir = "all";
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

    this.airportObj = {
      "New Delhi": 'DEL',
      "Delhi": 'DEL',
      "Chennai": 'MAA',
      "Benaras": "VNS",
      "Varanasi": "VNS",
      "Ahemdabad": 'AMD',
      "Ranchi": "IXR",
      "Lucknow": 'LKO',
      "Ludhiana": 'LUH',
      'Mangalore': 'IXE',
      "Leh": "IXL",
      "Allahabad": 'IXD',
      "Shillong": 'SHL',
      "Bareli": 'BEK',
      "Bengaluru": 'BLR',
      "Bangalore": 'BLR',
      "Bhatinda": 'BUP',
      "Bhopal": 'BHO',
      "Bhubaneswar": 'BBI',
      "Bikaner": 'BKB',
      "Bilaspur": 'PAB',
      "Guwahati": 'GUA',
      "Chandigarh": 'IXC',
      "Mumbai": 'BOM',
      "Aurangabad": 'IXU',
      "Kochi": 'COK',
      "Udaipur": 'UDR',
      "GOA": 'GOI',
      "DAMAN": 'NMB',
      "Darjeeling": 'DAI',
      "Dehra Dun": 'DED',
      "Indore": 'IDR',
      "Dhanbad": 'DBD',
      "Dharamsala": 'DHM',
      "Nasik": 'ISK',
      "Gaya": 'GAY',
      "Gorakhpur": 'GOP',
      "Jamnagar": 'JGA',
      "Gwalior": 'GWL',
      "Hissar": 'HSS',
      "Hubli": 'HBX',
      "Hyderabad": 'HYD',
      "Jabalpur": 'JLR',
      "Jaisalmer": 'JSA',
      "Jodhpur": 'JDH',
      "Kanpur": 'KNU',
      "Agra": 'AGR',
      "Kota": 'KTU',
      "Kozhikode": 'CCJ',
      "Pune": 'PNQ',
      "Madurai": 'IXM',
      "Imphal": 'IMF',
      "Muzaffarnagar  ": 'MZA',
      "Muzaffarpur": 'MZU',
      "Mysore": 'MYQ',
      "Kolkata": 'CCU',
      "Pantnagar": 'PGH',
      "Pathankot": 'IXP',
      "Patna": 'PAT',
      "Pondicherry": 'PNY',
      "ImpPorbandarhal": 'PBD',
      "Port Blair ": 'IXZ',
      "Raipur": 'RPR',
      "Amritsar": 'ATQ',
      "Rajkot": 'RAJ',
      "Rajouri": 'RJI',
      "Ratnagiri": 'RTC',
      "Rourkela": 'RRK',
      "Bhuj": 'BHJ',
      "Tezpur": 'TEZ',
      "Jaipur": 'JAI',
      "Jammu": 'IXJ',
      "Sholapur": 'SSE',
      "Simla": 'SLV',
      "Agartala": 'IXA',
      "Jamshedpur": 'IXW',
      "Nagpur": 'NAG',
      "Srinagar": 'SXR',
      "Surat": 'STV',
      "Trivandrum": 'TRV',
      "Tirupati": 'TIR',
      "Vadodara": 'BDQ',
      "Vijayawada": 'VGA',
      "Vishakhapatnam": 'VTZ',
      "Warangal": 'WGC',
      "Zero": 'ZER'
    }

    this.airDropDown = [
      {
        code: "AI",
        name: 'Air India'
      },
      {
        code: "9W",
        name: 'Jet Airways'
      },
      {
        code: "6E",
        name: 'IndiGo'
      },
      {
        code: "IX",
        name: 'Air India Express'
      },
      {
        code: "SG",
        name: 'SpiceJet'
      },
      {
        code: "G8",
        name: 'GoAir'
      },
      {
        code: "I5",
        name: 'AirAsia India'
      },
      {
        code: "UK",
        name: 'Vistara'
      },
      {
        code: "9I",
        name: 'Alliance Air'
      },
      {
        code: "2T",
        name: 'TruJet'
      },
      {
        code: "DN",
        name: 'Air Deccan'
      },
      {
        code: "6X",
        name: 'Air Odisha'
      },
      {
        code: "ZO",
        name: 'Zoom Air'
      }, {
        code: "BZ",
        name: 'Blue Dart Aviation'
      },
      {
        code: "QO",
        name: 'Quikjet Airlines'
      }
    ]
  }
  ngOnInit() {
    console.log = ()=>{

    }
  }
  ngAfterViewInit() {
    // $(document).ready(function () {
      $('.datepicker').datepicker();
    // });

    $('#fromDate').datepicker({ defaultDate: new Date(),minDate:new Date() })


    let self = this;
    let sel_col = $('#collegeAutocomplete').selectize({
      create: true,
      createOnBlur: true,
      //createFilter: '^[a-zA-Z]+$',
      persist: false,
      preload: 'focus',
      valueField: 'value',
      labelField: 'label',
      searchField: 'label',
      "openOnFocus": true,
      "hideSelected": true,
      "closeAfterSelect": true,
      "placeholder": "Select City",
      // optgroupField: 'type',
      // optgroupLabelField: 'name',
      // optgroupValueField: 'id',
      // lockOptgroupOrder: true,
      // optgroups: [
      //   { $order: 2, id: 'college', name: 'Colleges' },
      //   { $order: 1, id: 'department', name: 'Programmes and Disciplines' },
      // ],
      // plugins: ['remove_button'],
      load: function (query, callback) {
        $.ajax({
          url: 'https://flightdatacrawler.herokuapp.com/api' + '/fetchAllCities',
          data: { "search": query},
          type: 'POST',
          dataType: 'json',
          error: function () {
            callback();
          },
          success: function (res) {
         
            console.log(res.data);
            
            callback(res.data);
          }
        });
      },
      onFocus: function () {
        console.log('on focus');
        setTimeout(() => {
          let $activeSelect = sel_col[0].selectize;
          let $value = $('#collegeAutocomplete').text();
          if ($value.length > 0) {
            $activeSelect.clear();
            $activeSelect.setTextboxValue($value)
          }
        }, 100);
      },
      // onItemAdd: function (value, $item) {
      //   self.collegeId = value;
      //   self.getAllStudent();
      // }
    });
     sel_col = $('#collegeAutocomplete2').selectize({
      create: true,
      createOnBlur: true,
      //createFilter: '^[a-zA-Z]+$',
      persist: false,
      preload: 'focus',
      valueField: 'value',
      labelField: 'label',
      searchField: 'label',
      "openOnFocus": true,
      "hideSelected": true,
      "closeAfterSelect": true,
      "placeholder": "Select City",
      // optgroupField: 'type',
      // optgroupLabelField: 'name',
      // optgroupValueField: 'id',
      // lockOptgroupOrder: true,
      // optgroups: [
      //   { $order: 2, id: 'college', name: 'Colleges' },
      //   { $order: 1, id: 'department', name: 'Programmes and Disciplines' },
      // ],
      // plugins: ['remove_button'],
      load: function (query, callback) {
        $.ajax({
          url: 'https://flightdatacrawler.herokuapp.com/api' + '/fetchAllCities',
          data: { "search": query},
          type: 'POST',
          dataType: 'json',
          error: function () {
            callback();
          },
          success: function (res) {
         
            console.log(res.data);
            
            callback(res.data);
          }
        });
      },
      onFocus: function () {
        console.log('on focus');
        setTimeout(() => {
          let $activeSelect = sel_col[0].selectize;
          let $value = $('#collegeAutocomplete2').text();
          if ($value.length > 0) {
            $activeSelect.clear();
            $activeSelect.setTextboxValue($value)
          }
        }, 100);
      },
      // onItemAdd: function (value, $item) {
      //   self.collegeId = value;
      //   self.getAllStudent();
      // }
    })
    

  }

  totalPrice(price) {
    this.total_price = parseFloat(price.fare.price_per_adult.total_fare) + parseFloat(price.fare.price_per_adult.tax)
    return this.total_price;

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
  get(value: any) {
    this.loading = true;
    this.ds.get(value).subscribe(d => {
      if (d.success === true) {
        this.loading = false;
        this.flag = true;
        // console.log(this.source_name);
        
        // this.source = this.toTitleCase(this.source_name);
        // this.destination = this.toTitleCase(this.dest_name);
        this.totalRecord = d.data.results;

        for (var tr = 0; tr < this.totalRecord.length; tr++) {

          let fare2 = this.totalRecord[tr].fare.price_per_adult.total_fare;
          let tax1 = this.totalRecord[tr].fare.price_per_adult.tax;
          let total = parseFloat(fare2) + parseFloat(tax1);
          for (var it = 0; it < 1; it++) {
            let check1 = this.totalRecord[tr].itineraries[it].outbound.duration;
            for (var ob = 0; ob < 1; ob++) {
              this.totalRecord[tr].itineraries[it].outbound.flights[ob].departs_at = this.totalRecord[tr].itineraries[it].outbound.flights[ob].departs_at.split('T');
              this.totalRecord[tr].itineraries[it].outbound.flights[ob].arrives_at = this.totalRecord[tr].itineraries[it].outbound.flights[ob].arrives_at.split('T');
              let obj1 = {
                airline: this.totalRecord[tr].itineraries[it].outbound.flights[ob].operating_airline,
                flightCode: this.totalRecord[tr].itineraries[it].outbound.flights[ob].flight_number,
                source: this.source,
                dest: this.destination,
                fare: fare2,
                tax: tax1,
                final: total,
                departureDate: this.totalRecord[tr].itineraries[it].outbound.flights[ob].departs_at[0],
                departureTime: this.totalRecord[tr].itineraries[it].outbound.flights[ob].departs_at[1],
                duration: check1
              }
              this.csvObj.push(obj1);
            }
          }


        }

        // this.source = this.toTitleCase(this.source_name);
        // this.destination = this.toTitleCase(this.dest_name);
        this.totalRecord = d.data.results;
        // console.log(this.totalRecord);
      }
      else {
        this.loading = false;
        alert("No data Found")
      }
    });
  }



  onSubmit() {
    let date = $('#fromDate').val();
    if ($('#1').prop('checked')) {
      this.option = true;
    }
    else {
      this.option = false;
    }

    this.finaldate = this.datePipe.transform(date, "yyyy-MM-dd")
    // date = $('#toDate').val();
    // this.returnDate = this.datePipe.transform(date, "yyyy-MM-dd")
    var source, destination;
    try {

      // source = this.airportObj[this.toTitleCase(this.source_name)];
      // destination = this.airportObj[this.toTitleCase(this.dest_name)];

      source = $('#collegeAutocomplete').val()
      destination = $('#collegeAutocomplete2').val()
   console.log(source,destination);
   
    let src = $('#collegeAutocomplete').text().split('-') ;
    let det = $('#collegeAutocomplete2').text().split('-');

    this.source = src[0]
    this.destination = det[0];
    console.log(this.source,this.destination);
    
    let obj = {
      origin: source,
      dest: destination,
      originDate: this.finaldate,
      option: this.option,
      prefer: this.preferedAir
    }
    this.get(obj);
  }
    catch (err) {
      window.alert("Enter Correct Information");
      this.loading = false;

  }
}

  download() {
  
    var options = {
      fieldSeparator: ',',
      quoteStrings: '"',
      decimalseparator: '.',
      showLabels: true,
      showTitle: true,
      headers: ['AirLine Code', 'Flight Code', 'Source', 'Destination', 'Fare', 'Tax', 'Total', 'Depar. Date', 'Depar. Time', 'Travel Duration']
    };

    new Angular2Csv(this.csvObj, 'My Report', options);
    this.csvObj = []
  }
  opt(e) {
    this.preferedAir = e.target.value;
  }


}