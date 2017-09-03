import { Component } from '@angular/core';
import {CalendarComponent} from 'ap-angular2-fullcalendar';
@Component({
  selector: 'app-root',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent{
  calendarOptions:any = {
     header: {
				left: 'prev,next today',
				center: 'title',
				right: 'month,agendaWeek,agendaDay'
			},
      fixedWeekCount : false,
      defaultDate: '2016-09-12',
      editable: true,
      eventLimit: true, // allow "more" link when too many events
      events: []
    };

    onCalendarInit() {
      console.log('Calendar initialized');
      this.calendarOptions.events = [
            {
              title: 'All Day Event',
              start: '2016-09-01'
            },
            {
              title: 'Long Event',
              start: '2016-09-07',
              end: '2016-09-10'
            }
          ];
    }
}