import { Component, OnInit } from '@angular/core';
import{Router} from '@angular/router'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  titleHeader =[]
  constructor(private router: Router) { }

  ngOnInit() {
      this.titleHeader =  [{name:"home",value:"home"},{name:"dashboard",value:"dashboard"}]
  }
  changeRoute(value){
    if(value == 'home'){
      this.router.navigate(['/home/']);
    }else if(value =="dashboard"){
      this.router.navigate(['home/dashboard/1']);
    }
  }
 

}
