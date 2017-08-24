import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CustomersComponent } from './customers/customers.component';
import { ScheduleComponent } from './schedule/schedule.component';

import { CustomerService } from './customers/customer.service';
import { CustomHttpInterceptor } from './http.interceptor';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'customers',      component: CustomersComponent },
  { path: 'schedule',      component: ScheduleComponent }
  //{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent
    , HomeComponent
    , CustomersComponent
    , ScheduleComponent
  ],
  imports: [
    BrowserModule
    ,HttpClientModule
    ,RouterModule.forRoot(
      appRoutes,
      //{ enableTracing: true } // <-- debugging purposes only
    )
    
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: CustomHttpInterceptor, multi: true }
    ,CustomerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
