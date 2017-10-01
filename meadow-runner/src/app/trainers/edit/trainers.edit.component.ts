import { Component, OnInit } from '@angular/core';
import { TrainerService} from '../../trainers/trainers.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ITrainer } from '../models/trainer';
@Component({
  selector: 'app-root',
  templateUrl: './trainers.edit.component.html',
  styleUrls: []
})
export class TrainersEditComponent implements OnInit {
    model: ITrainer;

    constructor(private trainerService: TrainerService, private route: ActivatedRoute, private router: Router) {

    }

    ngOnInit(): void {
        const id: number = Number(this.route.snapshot.paramMap.get('id'));
        if (id) {
            const trainerPromise: Promise<ITrainer> = this.trainerService.get(id);
            trainerPromise.then(data => {
                this.model = data;
            });
        }
    }

    onSubmit(myForm) {
        console.log(myForm);
         this.router.navigate(['/trainers/1']);
    }
}
