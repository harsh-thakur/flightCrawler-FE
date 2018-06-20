import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  from: any;
  title = 'app';


  constructor(){

  }
  ngOnInit() {
    console.log('data', this.from);
    
  }
}
