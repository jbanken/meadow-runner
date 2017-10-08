import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as $ from 'jquery';
import 'jquery-ui-dist/jquery-ui';

(window as any).jQuery = $;
declare var require: any;
require('jquery-ui-touch-punch');

@Component({
    selector: 'app-root',
    templateUrl: 'trainers.schedule.component.html'
})

export class TrainersScheduleComponent implements OnInit, AfterViewInit {
    repeatOption: string;

    ngAfterViewInit(): void {
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
                let x: number;
                let y: number;

                if (jsEvent.type === 'touchend') {
                    // x and y coordinates for touch event
                    x = (<any>jsEvent).changedTouches[0].clientX;
                    y = (<any>jsEvent).changedTouches[0].clientY;
                } else {
                    // x and y coordinates for mouse event
                    x = jsEvent.clientX;
                    y = jsEvent.clientY;
                }

                if (this.isEventOverDiv(x, y)) {
                    // Remove the event from the calendar if it is thrown in the event trash can
                    // $('#calendar').fullCalendar('removeEvents', event._id);
                    $('#calendar').fullCalendar('removeEvents', function(calEvent)  {
                        alert(`Title = ${calEvent.title} calEvent._id = ${calEvent._id}  event._id = ${event._id}`);
                        return calEvent._id === event._id;
                    });
                }
            }
        });
    }

    isEventOverDiv(x: number, y: number): boolean {
        const eventTrashCan = $('#event-trash-can');
        const offset = eventTrashCan.offset();
        (<any>offset).right = eventTrashCan.outerWidth() + offset.left;
        (<any>offset).bottom = eventTrashCan.outerHeight() + offset.top;

        // Adjust for scrolling
        x = x + window.scrollX;
        y = y + window.scrollY;

        // Are the coordinates of where the event was dropped in the event trash can?
        if (x >= offset.left
            && y >= offset.top
            && x <= (<any>offset).right
            && y <= (<any>offset).bottom) {
            return true;
        }

        return false;
    }

    ngOnInit(): void { }
}
