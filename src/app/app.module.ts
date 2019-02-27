import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [ // component 
    AppComponent,
    LoginComponent
  ],
  imports: [ // module import
    BrowserModule,
    AppRoutingModule
  ],
  providers: [], // services 
  bootstrap: [AppComponent]
})
export class AppModule { }
