import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CustomersComponent } from './customers/customers.component';
import { ScheduleComponent } from './schedule/schedule.component';

import { CustomerService } from './services/customer.service';

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
    ,HttpModule
    ,RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [CustomerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
