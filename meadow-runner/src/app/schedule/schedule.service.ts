import {Injectable} from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {Event} from '../schedule/models/event';
@Injectable()
export class ScheduleService{
    events = [];
    constructor(private http: HttpClient){
        this.events.push(new Event("Event 1","2016-09-01",null,false));
        this.events.push(new Event("Event 2","2016-09-01","2016-09-01",false));
        this.events.push(new Event("Event 3","2016-09-03","2016-09-04",false));
    }

    list():Promise<any>{

        return new Promise((resolve, reject) => {
            resolve(this.events);
        });
    }
}