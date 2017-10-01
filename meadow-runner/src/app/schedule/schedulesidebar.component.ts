import { Component , ViewEncapsulation} from '@angular/core';
import {CalendarComponent} from 'ap-angular2-fullcalendar';
import {ScheduleService} from '../schedule/schedule.service';
import {TrainerService} from '../trainers/trainers.service';
import {IEvent} from '../schedule/models/event';
import {IEventType} from '../schedule/models/eventType';
import * as $ from 'jquery';
import { ITrainer } from '../trainers/models/trainer';
@Component({
  selector: 'schedule-side-bar',
  templateUrl: './schedulesidebar.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleSideBarComponent {
  calendarOptions: any;
  trainers: ITrainer[] = [];
  eventTypes: IEventType[] = [];
  constructor(private scheduleService: ScheduleService, private trainerService: TrainerService) {

     const trainersPromise: Promise<ITrainer[]> = this.trainerService.list();
        trainersPromise.then(data => {
            this.trainers = data;
        });

     const eventTypesPromise: Promise<IEventType[]> = this.scheduleService.listEventTypes();
        eventTypesPromise.then(data => {
            this.eventTypes = data;
        });

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
        events: (start, end, timezone, callback) => {
          this.scheduleService.list()
            .then(res => callback(res)); // just call callback
        },
        eventDrop: function(event, delta, revertFunc) {
          console.log('Calendar Event Dropped');
          console.log(event);
      }
    };
  }
  onCalendarInit(event: any) {
    console.log('Calendar initialized');
  }

  onEventTypeClicked(eventTypeId: number) {
    console.log('EventType Clicked');
  }

  onTrainerClicked(trainerID: number) {
    console.log('Trainer Clicked');
    const events: IEvent[] = [];
    const checked = $('#trainer-' + trainerID + ':checkbox:checked').length >= 1 ? true : false; // todo don't use jquery;

    if (checked) {
      if (trainerID === 1) {
          events.push({id: 101, title: 'Joe Available', start: '2016-09-05', end: null, hasTime: false, backgroundColor: 'green'});
          events.push({id: 102, title: 'Joe Available', start: '2016-09-07', end: null, hasTime: false, backgroundColor: 'green'});
          events.push({id: 103, title: 'Joe Available', start: '2016-09-09', end: null, hasTime: false, backgroundColor: 'green'});
      }else if (trainerID === 2) {
          events.push({id: 201, title: 'Mark Available', start: '2016-09-06', end: null, hasTime: false, backgroundColor: 'green'});
          events.push({id: 202, title: 'Mark Available', start: '2016-09-08', end: null, hasTime: false, backgroundColor: 'green'});
      }else if (trainerID === 3) {
          events.push({id: 301, title: 'Mike Available', start: '2016-09-05', end: null, hasTime: false, backgroundColor: 'green'});
          events.push({id: 302, title: 'Mike Available', start: '2016-09-06', end: null, hasTime: false, backgroundColor: 'green'});
      }
      this.calendarOptions.events = events;
      $('#myCalendar').fullCalendar('renderEvents', events, true);
    } else {
      if (trainerID === 1) {
        $('#myCalendar').fullCalendar('removeEvents', 101);
        $('#myCalendar').fullCalendar('removeEvents', 102);
        $('#myCalendar').fullCalendar('removeEvents', 103);
      }else if (trainerID === 2) {
        $('#myCalendar').fullCalendar('removeEvents', 201);
        $('#myCalendar').fullCalendar('removeEvents', 202);
      }else if (trainerID === 3) {
        $('#myCalendar').fullCalendar('removeEvents', 301);
        $('#myCalendar').fullCalendar('removeEvents', 302);
      }
    }
  }
}
