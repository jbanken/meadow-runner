import {Injectable} from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { IService } from '../services/models/service';
@Injectable()
export class ServiceService {
    services: IService[] = [
        {
            Id: 1,
            Name: 'Service 1'
        },
        {
            Id: 2,
            Name: 'Service 2'
        },
        {
            Id: 3,
            Name: 'Service 3'
        },
    ];

    constructor(private http: HttpClient) {
    }

    list(): Promise<IService[]> {

        return new Promise((resolve, reject) => {
            resolve(this.services);
        });
    }

    get(Id: number): Promise<IService> {
        return new Promise((resolve, reject) => {
            const filteredService: IService[] = this.services.filter(t => t.Id === Id);
            if (filteredService && filteredService.length) {
                resolve(filteredService[0]);
            }
        });
    }
}
