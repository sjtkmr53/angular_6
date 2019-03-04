import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginService } from './login.service';
import { HttpModule} from "@angular/http";
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { MainComponentComponent } from './main-component/main-component.component';
@NgModule({
  declarations: [ // component 
    AppComponent,
    LoginComponent,
    DashboardComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    MainComponentComponent
  ],
  imports: [ // module import
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [LoginService], // services 
  bootstrap: [AppComponent]
})
export class AppModule { }
