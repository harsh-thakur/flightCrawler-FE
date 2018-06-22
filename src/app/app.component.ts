import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
// import { Component, OnInit , AfterViewInit} from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Plan My Flight';

  source_name: string
  dest_name: string
  from_date: string
  to_date: string
  oneWay: Boolean = false
  duration: Number
  direct: Boolean = false
  max_price: Number
  agg_mode: string
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

  constructor(private ds: DataService) {
    this.destination = '';
    this.source = '';
    this.date = '';

    this.originCode = '';
    this.destCode = '';
    this.airportObj = {
      DEL: 'New Delhi',
      BLR: 'Bengaluru',
      VNS: 'Varanasi'

    }
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
    this.cityObj = {
      Ahmedabad: 'AMD',
      Aizawl: 'AJL',
      Akola: 'AKD',
      Along: 'IXV',
      Lucknow: 'LKO',
      Ludhiana: 'LUH',
      Bagdogra: 'IXB',
      Mangalore: 'IXE',
      Leh: 'IXL',
      Balurghat: 'RGH',
      Allahabad: 'IXD',
      Shillong: 'SHL',
      Bareli: 'BEK',
      Bangalore: 'BLR ',
      Bengaluru: 'BLR',
      Bhatinda: 'BUP',
      Bhavnagar: 'BHU',
      Bhopal: 'BHO',
      Bhubaneswar: 'BBI',
      Bikaner: 'BKB',
      Bilaspur: 'PAB',
      Ranchi: 'IXR',
      Guwahati: 'GAU',
      Chandigarh: 'IXC',
      Chennai: 'MAA',
      Mumbai: 'BOM',
      Aurangabad: 'IXU',
      Kochi: 'COK',
      Cooch: 'COH',
      Cuddapah: 'CDP',
      Udaipur: 'UDR',
      Goa: 'GOI',
      Daman: 'NMB',
      Daparizo: 'DAE',
      Darjeeling: 'DAI',
      Dehradun: 'DED',
      Deparizo: 'DEP',
      Indore: 'IDR',
      Dhanbad: 'DBD',
      Dibrugarh: 'DIB',
      Dimapur: 'DMU',
      Diu: 'DIU',
      Dharamsala: 'DHM',
      Nasik: 'ISK',
      Gaya: 'GAY',
      Gorakhpur: 'GOP',
      Jamnagar: 'JGA',
      Guna: 'GUX',
      Gwalior: 'GWL',
      Hissar: 'HSS',
      Hubli: 'HBX',
      Hyderabad: 'HYD',
      Delhi: 'DEL',
      Jabalpur: 'JLR',
      Jagdalpur: 'JGB',
      Jaisalmer: 'JSA',
      Jeypore: 'PYB',
      Jodhpur: 'JDH',
      Kailashahar: 'IXH',
      Kamalpur: 'IXQ',
      Kandla: 'IXY',
      Kanpur: 'KNU',
      Keshod: 'IXK',
      Khajuraho: 'HJR',
      Agra: 'AGR',
      Khowai: 'IXN',
      Kolhapur: 'KLH',
      Kota: 'KTU',
      Kozhikode: 'CCJ',
      Silchar: 'IXS',
      Lilabari: 'IXI',
      Pune: 'PNQ',
      Madurai: 'IXM',
      Malda: 'LDA',
      Mohanbari: 'MOH',
      Imphal: 'IMF',
      Muzaffarnagar: 'MZA',
      Muzaffarpur: 'MZU',
      Mysore: 'MYQ',
      Nanded: 'NDC',
      Kolkata: 'CCU',
      Neyveli: 'NVY',
      Osmanabad: 'OMN',
      Pantnagar: 'PGH',
      Pasighat: 'IXT',
      Pathankot: 'IXP',
      Patna: 'PAT',
      Coimbatore: 'CJB',
      Pondicherry: 'PNY',
      Porbandar: 'PBD',
      Puttaparthi: 'PUT',
      Raipur: 'RPR',
      Amritsar: 'ATQ',
      Rajahmundry: 'RJA',
      Rajkot: 'RAJ',
      Rajouri: 'RJI',
      Ramagundam: 'RMD',
      Ratnagiri: 'RTC',
      Rewa: 'REW',
      Rourkela: 'RRK',
      Jorhat: 'JRH',
      Bhuj: 'BHJ',
      Rupsi: 'RUP',
      Salem: 'SXV',
      Tezpur: 'TEJ',
      Belgaum: 'IXG',
      Jaipur: 'JAI',
      Satna: 'TNI',
      Jammu: 'IXJ',
      Sholapur: 'SSE',
      Simla: 'SLV',
      Agartala: 'IXA',
      Jamshedpur: 'IXW',
      Nagpur: 'NAG',
      Srinagar: 'SXR',
      Surat: 'STV',
      Tezu: 'TEI',
      Thanjavur: 'TJV',
      Trivandrum: 'TRV',
      Tirupati: 'TIR',
      Trichy: 'TRZ',
      Tuticorin: 'TCR',
      Vadodara: 'BDQ',
      Varanasi: 'VNS',
      Banaras: 'VNS',
      Benaras: 'VNS',
      Vijayawada: 'VGA',
      Vishakhapatnam: 'VTZ',
      Zero: 'ZER'
    }
  }
  ngOnInit() {
    

  }

 toTitleCase(str) {
    return str.replace(
        /\w\S*/g,
        function(txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        }
    );
}

  get(value:any) {
    this.ds.get(value).subscribe(d => {
      if (d.success === true) {
        this.flag = true;
        console.log(d);
        
         this.source = this.toTitleCase(this.source_name);
         this.destination = this.toTitleCase(this.dest_name);
         this.totalRecord = d.data.results;
         console.log(this.totalRecord);
         
        // this.destination = this.airportObj[d.data.DestinationLocation];
        // this.totalRecord = d.data.FareInfo;
        // console.log(this.source, this.destination, this.totalRecord);

      }
      else{
        alert(d.msg)
      }
    });
  }
  onSubmit(){
  
  let obj = {
  origin : this.source_name,
  dest: this.dest_name,
  date: this.from_date
  }
  this.get(obj);
    
    
  }
}