import { Component} from '@angular/core';
import {CalendarComponent} from 'ap-angular2-fullcalendar';
import {ScheduleService} from '../schedule/schedule.service';
@Component({
  selector: 'app-root',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent{
  calendarOptions:any = {};
  constructor(private scheduleService:ScheduleService){
     this.calendarOptions = {
      header: {
          left: 'prev,next today',
          center: 'title',
          right: 'month,agendaWeek,agendaDay'
        },
        fixedWeekCount : false,
        defaultDate: '2016-09-12',
        editable: true,
        eventLimit: true, // allow "more" link when too many events
        events: (start, end, timezone, callback)=> {
          this.scheduleService.list()
            .then(res => callback(res)); // just call callback
        },
        eventDrop: function(event, delta, revertFunc) {
          console.log('Calendar Event Dropped');
          console.log(event);
      }
    };
  }
  onCalendarInit() {
    console.log('Calendar initialized');
  }
}