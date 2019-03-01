import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginService } from './login.service';
import { HttpModule} from "@angular/http";
import { HttpClientModule } from '@angular/common/http'

@NgModule({
  declarations: [ // component 
    AppComponent,
    LoginComponent
  ],
  imports: [ // module import
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    HttpClientModule
  ],
  providers: [LoginService], // services 
  bootstrap: [AppComponent]
})
export class AppModule { }
