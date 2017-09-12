import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { PhonePipe} from './pipes/phone.pipe';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CustomersComponent } from './customers/customers.component';
import { CustomersShowComponent } from './customers/show/customers.show.component';

import { ScheduleService } from './schedule/schedule.service';
import { ScheduleComponent } from './schedule/schedule.component';

import { CustomerService } from './customers/customers.service';
import { CustomHttpInterceptor } from './http.interceptor';

import {CalendarModule} from "ap-angular2-fullcalendar";

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'customers',      component: CustomersComponent },
  { path: 'customers/:id',      component: CustomersShowComponent },
  { path: 'schedule',      component: ScheduleComponent }
  //{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent
    , HomeComponent
    , CustomersComponent
    , CustomersShowComponent
    , ScheduleComponent
    , PhonePipe
  ],
  imports: [
    BrowserModule
    ,FormsModule
    ,HttpClientModule
    ,RouterModule.forRoot(
      appRoutes,
      //{ enableTracing: true } // <-- debugging purposes only
    )
    ,Ng2SmartTableModule
    ,CalendarModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: CustomHttpInterceptor, multi: true }
    ,CustomerService
    ,ScheduleService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


//generate language file: ng xi18n --output-path src/i18n