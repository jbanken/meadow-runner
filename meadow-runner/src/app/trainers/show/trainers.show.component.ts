import { Component } from '@angular/core';
import { TrainerService} from '../../trainers/trainers.service';
import { ActivatedRoute } from '@angular/router';
import { Trainer} from '../../trainers/models/trainer';
@Component({
  selector: 'app-root',
  templateUrl: './trainers.show.component.html',
  styleUrls: []
})
export class TrainersShowComponent {
    model:Trainer;

    constructor(private trainerService:TrainerService,private route: ActivatedRoute){
        
    }

    ngOnInit(){
        let id = this.route.snapshot.paramMap.get('id');
        var trainerPromise = this.trainerService.get(id);
        trainerPromise.then(data=>{
            this.model = data[0];
        });

    }
}
