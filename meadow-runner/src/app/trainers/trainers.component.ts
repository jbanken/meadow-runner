import { Component, OnInit } from '@angular/core';
import { TrainerService} from '../trainers/trainers.service';
import { PhonePipe} from '../pipes/phone.pipe';
import { Router} from '@angular/router';
import { ITrainer } from './models/trainer';
@Component({
  selector: 'app-root',
  templateUrl: './trainers.component.html'
})
export class TrainersComponent implements OnInit {
    trainers: ITrainer[] = [];
    settings = {};
    constructor(private trainerService: TrainerService, private router: Router) {
    }

    rowClick(event): void {
       this.router.navigate(['/trainers/' + event.data.Id]);
    }

    ngOnInit() {

        this.settings = {
            actions: false
            , hideSubHeader: true
            , columns: {
                Id: {
                title: 'ID'
                },
                FirstName: {
                title: 'First Name'
                },
                LastName: {
                title: 'Last Name'
                },
                Email: {
                title: 'Email'
                },
                Phone: {
                title: 'Phone',
                valuePrepareFunction: (value) => new PhonePipe().transform(value)
                }
            }
        };

        const trainersPromise: Promise<ITrainer[]> = this.trainerService.list();
        trainersPromise.then(data => {
            this.trainers = data;
        });

    }
}
