import { Component, OnInit } from '@angular/core';
import { TrainerService} from '../../trainers/trainers.service';
import { ActivatedRoute } from '@angular/router';
import { ITrainer} from '../../trainers/models/trainer';
@Component({
  selector: 'app-root',
  templateUrl: './trainers.show.component.html',
  styleUrls: []
})
export class TrainersShowComponent implements OnInit {
    model: ITrainer;

    constructor(private trainerService: TrainerService, private route: ActivatedRoute) {

    }

    ngOnInit(): void {
        const id: number = Number(this.route.snapshot.paramMap.get('id'));
        const trainerPromise: Promise<ITrainer> = this.trainerService.get(id);
        trainerPromise.then(data => {
            this.model = data;
        });
    }
}
