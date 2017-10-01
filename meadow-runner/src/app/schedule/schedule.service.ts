import {Injectable} from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {IEvent} from '../schedule/models/event';
import {IEventType} from '../schedule/models/eventType';
@Injectable()
export class ScheduleService {
    events: IEvent[] = [
        {
            id: 1,
            title: 'Event 1',
            start: '2016-09-01',
            end: null,
            hasTime: false,
            backgroundColor: 'blue'
        },
        {
            id: 2,
            title: 'Event 2',
            start: '2016-09-01',
            end: '2016-09-01',
            hasTime: false,
            backgroundColor: 'blue'
        },
        {
            id: 3,
            title: 'Event 3',
            start: '2016-09-03',
            end: '2016-09-04',
            hasTime: false,
            backgroundColor: 'blue'
        }
    ];

    eventTypes: IEventType[] = [
        {
            Id: 1,
            Name: 'Available'
        },
        {
            Id: 2,
            Name: 'Busy'
        },
        {
            Id: 3,
            Name: 'Class'
        },
        {
            Id: 4,
            Name: 'Session'
        },
    ];

    constructor(private http: HttpClient) {
    }

    list(): Promise<IEvent[]> {

        return new Promise((resolve, reject) => {
            resolve(this.events);
        });
    }

    listEventTypes(): Promise<IEventType[]> {

        return new Promise((resolve, reject) => {
            resolve(this.eventTypes);
        });
    }
}
