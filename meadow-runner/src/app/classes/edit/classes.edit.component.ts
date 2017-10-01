import { Component, OnInit } from '@angular/core';
import { ClassService} from '../../classes/classes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { IClass} from '../../classes/models/class';
@Component({
  selector: 'app-root',
  templateUrl: './classes.edit.component.html',
  styleUrls: []
})
export class ClassesEditComponent implements OnInit {
    model: IClass;

    constructor(private classesService: ClassService, private route: ActivatedRoute, private router: Router) {
    }

    ngOnInit(): void {
        const id: number = Number(this.route.snapshot.paramMap.get('id'));
        if (id) {
            const classPromise: Promise<IClass> = this.classesService.get(id);
            classPromise.then(data => {
                this.model = data;
            });
        }
    }

    onSubmit(myForm) {
        console.log(myForm);
         this.router.navigate(['/classes/1']);
    }
}
