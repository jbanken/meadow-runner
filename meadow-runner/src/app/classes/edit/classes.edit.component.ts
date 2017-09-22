import { Component } from '@angular/core';
import { ClassService} from '../../classes/classes.service';
import { ActivatedRoute,Router } from '@angular/router';
import { Class} from '../../classes/models/class';
@Component({
  selector: 'app-root',
  templateUrl: './classes.edit.component.html',
  styleUrls: []
})
export class ClassesEditComponent {
    model:Class;

    constructor(private classesService:ClassService,private route: ActivatedRoute,private router:Router){
        
    }

    ngOnInit(){
        let id = this.route.snapshot.paramMap.get('id');
        if(id){
            var classPromise = this.classesService.get(id);
            classPromise.then(data=>{
                this.model = data[0];
            });
        }

    }

    onSubmit(myForm){
        console.log(myForm);
         this.router.navigate(['/classes/1']);
    }
}
