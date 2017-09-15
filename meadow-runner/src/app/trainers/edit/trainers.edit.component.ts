import { Component } from '@angular/core';
import { TrainerService} from '../../trainers/trainers.service';
import { ActivatedRoute,Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './trainers.edit.component.html',
  styleUrls: []
})
export class TrainersEditComponent {
    model = {Id:"",FirstName:"",LastName:"",Email:"",Phone:""};

    constructor(private trainerService:TrainerService,private route: ActivatedRoute,private router:Router){
        
    }

    ngOnInit(){
        let id = this.route.snapshot.paramMap.get('id');
        if(id){
            var trainerPromise = this.trainerService.get(id);
            trainerPromise.then(data=>{
                this.model = data[0];
            });
        }

    }

    onSubmit(myForm){
        console.log(myForm);
         this.router.navigate(['/trainers/1']);
    }
}
