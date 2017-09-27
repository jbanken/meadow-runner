import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as $ from 'jquery';
import 'jquery-ui-dist/jquery-ui';

@Component({
    selector: 'app-root',
    templateUrl: 'trainers.schedule.component.html'
})

export class TrainersScheduleComponent implements OnInit, AfterViewInit {

    ngAfterViewInit() {
        $('.cal-event').each(function() {
            // store data so the calendar knows to render an event upon drop
            $(this).data('event', {
                title: $.trim($(this).text()), // use the element's text as the event title
                stick: true, // maintain when user navigates (see docs on the renderEvent method)
                duration: '01:00'
            });
            // make the event draggable using jQuery UI
            (<any>$(this)).draggable({
                zIndex: 999,
                revert: true,      // will cause the event to go back to its
                revertDuration: 0  //  original position after the drag
            });
        });

        $('#calendar').fullCalendar({
            defaultView: 'agendaWeek',
            header: {
                left: '',
                center: '',
                right: ''
            },
            editable: true,
            droppable: true, // this allows things to be dropped onto the calendar
        });
    }

    ngOnInit() { }
}
