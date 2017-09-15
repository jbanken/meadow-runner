import { Component } from '@angular/core';
import { ClassService} from '../classes/classes.service';
import { PhonePipe} from '../pipes/phone.pipe';
import { Router} from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './classes.component.html'
})
export class ClassesComponent {
    classes = [];
    settings = {};
    constructor(private classeService:ClassService, private router:Router){
        
    }

    rowClick(event): void {
       this.router.navigate(['/classes/'+event.data.Id]);
    }

    ngOnInit(){

        this.settings = {
            actions: false
            ,hideSubHeader: true
            ,columns: {
                Id: {
                title: 'ID'
                },
                Name: {
                title: 'Name'
                }
            }
        };
        
        var classesPromise = this.classeService.list();
        classesPromise.then(data=>{
            this.classes = data;
        });

    }
}
