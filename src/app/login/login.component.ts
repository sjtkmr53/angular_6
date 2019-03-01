import { Component, OnInit } from '@angular/core';
import{LoginService} from '../login.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login;
  constructor( private loginService: LoginService) { }
  ngOnInit() {
    this.getLogin();
  }

  getLogin() :void{
    this.login = this.loginService.login().subscribe(obj => {
      console.log(obj)
    })
  }

}
