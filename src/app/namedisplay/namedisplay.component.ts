import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-namedisplay',
  templateUrl: './namedisplay.component.html',
  styleUrls: ['./namedisplay.component.css']
})
export class NamedisplayComponent implements OnInit {
  view:Boolean = false;
  cust_name:String;
  constructor() { }

  ngOnInit() {
  }
  public showMsg(){
    this.view = true;
  }

}
