import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CustomersComponent } from './customers/customers.component';
import { ScheduleComponent } from './schedule/schedule.component';

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
    ,RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
