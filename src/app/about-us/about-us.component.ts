import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  showMsg(){
    let receivedData: any;
    receivedData = '5';
    if (typeof(receivedData) === 'number') {
      receivedData += 5;
    } else {
      receivedData += 10;
    }
    console.log(receivedData);
   
  }

}
