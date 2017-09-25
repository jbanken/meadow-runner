import {Injectable} from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {Event} from '../schedule/models/event';
import {EventType} from '../schedule/models/eventType';
@Injectable()
export class ScheduleService{
    events = [];
    eventTypes = [];
    constructor(private http: HttpClient){
        this.events.push(new Event(1,"Event 1","2016-09-01",null,false,"blue"));
        this.events.push(new Event(2,"Event 2","2016-09-01","2016-09-01",false,"blue"));
        this.events.push(new Event(3,"Event 3","2016-09-03","2016-09-04",false,"blue"));

        this.eventTypes.push(new EventType(1,"Available"));
        this.eventTypes.push(new EventType(2,"Busy"));
        this.eventTypes.push(new EventType(3,"Class"));
        this.eventTypes.push(new EventType(4,"Session"));
    }

    list():Promise<any>{

        return new Promise((resolve, reject) => {
            resolve(this.events);
        });
    }

    listEventTypes():Promise<any>{

        return new Promise((resolve, reject) => {
            resolve(this.eventTypes);
        });
    }
}