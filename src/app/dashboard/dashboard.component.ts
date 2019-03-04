import { Component, OnInit } from '@angular/core';
import{LoginService} from'../login.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  employeeList;
  constructor(private loginService: LoginService) { }

  ngOnInit() {
    this.getData()
  }
  getData (){
    this.loginService.login().subscribe(obj => {
      console.log(obj)
        this.employeeList = obj
      })
  }

}
