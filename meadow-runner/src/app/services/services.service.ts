import {Injectable} from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Service } from '../services/models/service';
@Injectable()
export class ServiceService{
    services = [];
    constructor(private http: HttpClient){
        this.services.push(new Service(1,"Service 1"));
        this.services.push(new Service(2,"Service 2"));
        this.services.push(new Service(3,"Service 3"));
    }

    list():Promise<any>{

        return new Promise((resolve, reject) => {
            resolve(this.services);
        });
    }

    get(Id):Promise<any>{

        return new Promise((resolve, reject) => {
            var service = this.services.filter(t => t.Id == Id);
            resolve(service);
        });
    }
}