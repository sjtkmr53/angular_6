import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-component',
  templateUrl: './main-component.component.html',
  styleUrls: ['./main-component.component.css']
})
export class MainComponentComponent implements OnInit {
  titleHeader
  constructor() { }

  ngOnInit() {
    this.titleHeader =  [{name:"home",value:"home"},{name:"dashboard",value:"dashboard"}]
    console.log(MainComponentComponent)
  }

}
