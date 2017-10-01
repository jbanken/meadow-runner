import { Component, OnInit } from '@angular/core';
import { ClassService} from '../classes/classes.service';
import { PhonePipe} from '../pipes/phone.pipe';
import { Router} from '@angular/router';
import { IClass } from './models/class';
@Component({
  selector: 'app-root',
  templateUrl: './classes.component.html'
})
export class ClassesComponent implements OnInit {
    classes: IClass[] = [];
    settings = {};
    constructor(private classeService: ClassService, private router: Router) {
    }

    rowClick(event): void {
       this.router.navigate(['/classes/' + event.data.Id]);
    }

    ngOnInit(): void {

        this.settings = {
            actions: false
            , hideSubHeader: true
            , columns: {
                Id: {
                title: 'ID'
                },
                Name: {
                title: 'Name'
                }
            }
        };

        const classesPromise: Promise<IClass[]> = this.classeService.list();
        classesPromise.then(data => {
            this.classes = data;
        });

    }
}
