import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as $ from 'jquery';
import 'jquery-ui-dist/jquery-ui';

@Component({
    selector: 'app-root',
    templateUrl: 'trainers.schedule.component.html'
})

export class TrainersScheduleComponent implements OnInit, AfterViewInit {
    isEventOverDiv(x, y) {
        const deleteEvent = $( '#deleteEvent' );
        const offset = deleteEvent.offset();
        (<any>offset).right = deleteEvent.outerWidth() + offset.left;
        (<any>offset).bottom = deleteEvent.outerHeight() + offset.top;

        x = x + window.scrollX;
        y = y + window.scrollY;

        // Compare
        if (x >= offset.left
            && y >= offset.top
            && x <= (<any>offset).right
            && y <= (<any>offset).bottom) { return true; }
        return false;

    }

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
            dragRevertDuration: 0,
            eventDragStop: ( event, jsEvent, ui, view ) => {
                if (this.isEventOverDiv(jsEvent.clientX, jsEvent.clientY)) {
                    $('#calendar').fullCalendar('removeEvents', event._id);
                }
            }
        });
    }

    ngOnInit() { }
}
