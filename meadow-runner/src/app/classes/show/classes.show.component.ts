import { Component } from '@angular/core';
import { ClassService} from '../../classes/classes.service';
import { ActivatedRoute } from '@angular/router';
import { Class} from '../../classes/models/class';
@Component({
  selector: 'app-root',
  templateUrl: './classes.show.component.html',
  styleUrls: []
})
export class ClassesShowComponent {
    model:Class;

    constructor(private classService:ClassService,private route: ActivatedRoute){
        
    }

    ngOnInit(){
        let id = this.route.snapshot.paramMap.get('id');
        var classPromise = this.classService.get(id);
        classPromise.then(data=>{
            this.model = data[0];
        });

    }
}
