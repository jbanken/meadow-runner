import { Component } from '@angular/core';
import { TrainerService} from '../trainers/trainers.service';
import { PhonePipe} from '../pipes/phone.pipe';
import { Router} from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './trainers.component.html'
})
export class TrainersComponent {
    trainers = [];
    settings = {};
    constructor(private trainerService:TrainerService, private router:Router){
        
    }

    rowClick(event): void {
       this.router.navigate(['/trainers/'+event.data.Id]);
    }

    ngOnInit(){

        this.settings = {
            actions: false
            ,hideSubHeader: true
            ,columns: {
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
                title: 'Phone'
                }
            }
        };
        
        var trainersPromise = this.trainerService.list();
        trainersPromise.then(data=>{
            this.trainers = data;
        });

    }
}
