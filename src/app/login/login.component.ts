import { Component, OnInit } from '@angular/core';
import{LoginService} from '../login.service';
import * as _ from "lodash";
import{Router} from '@angular/router'

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
    console.log(email, postId)
    this.router.navigate(['/dashboard/'+1]);
   this.loginService.login().subscribe(obj => {
      console.log(obj)
    })
  }

}
