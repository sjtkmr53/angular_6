import { Component, OnInit } from '@angular/core';
import{LoginService} from '../login.service';
import * as _ from "lodash";
import{Router} from '@angular/router'
import { MainComponentComponent } from '../main-component/main-component.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  email; 
  postId;
  constructor( private loginService: LoginService , private router: Router) { }
  ngOnInit() {
   
  }

  login(email, postId) :void{
   this.loginService.login().subscribe(obj => {
     MainComponentComponent["loginTrue"] = true
     this.router.navigate(['/home']);
    })
  }

}
