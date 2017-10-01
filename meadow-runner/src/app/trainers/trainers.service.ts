import {Injectable} from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { ITrainer } from '../trainers/models/trainer';

@Injectable()
export class TrainerService {
    trainers: ITrainer[] = [
        {
            Id: 1,
            FirstName: 'Joe Trainer',
            LastName: 'Banken',
            Email: 'jbanken@meadowrunner.com',
            Phone: '9999999999'
        },
        {
            Id: 2,
            FirstName: 'Mark Trainer',
            LastName: 'Petro',
            Email: 'mpetro@meadowrunner.com',
            Phone: '9999999999'
        },
        {
            Id: 3,
            FirstName: 'Mike Trainer',
            LastName: 'Sanders',
            Email: 'msanders@meadowrunner.com',
            Phone: '9999999999'
        }
    ];

    constructor(private http: HttpClient) {
    }

    list(): Promise<ITrainer[]> {

        return new Promise((resolve, reject) => {
            resolve(this.trainers);
        });
    }

    get(Id: number): Promise<ITrainer> {

        return new Promise((resolve, reject) => {
            const filteredTrainers: ITrainer[] = this.trainers.filter(t => t.Id === Id);
            if (filteredTrainers && filteredTrainers.length) {
                resolve(filteredTrainers[0]);
            }
        });
    }
}
