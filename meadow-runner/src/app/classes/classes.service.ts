import {Injectable} from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { IClass } from '../classes/models/class';
@Injectable()
export class ClassService {
    classes: IClass[] = [
        {
            Id: 1,
            Name: 'Boot Camp'
        },
        {
            Id: 2,
            Name: 'Run Club'
        },
        {
            Id: 3,
            Name: 'Bro-out class'
        }
    ];

    constructor(private http: HttpClient) {
    }

    list(): Promise<IClass[]> {

        return new Promise((resolve, reject) => {
            resolve(this.classes);
        });
    }

    get(Id): Promise<IClass> {

        return new Promise((resolve, reject) => {
            const filteredClasses = this.classes.filter(t => t.Id === Id);
            if (filteredClasses && filteredClasses.length) {
                resolve(filteredClasses[0]);
            }
        });
    }
}
