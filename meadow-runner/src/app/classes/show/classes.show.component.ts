import { Component, OnInit } from '@angular/core';
import { ClassService} from '../../classes/classes.service';
import { ActivatedRoute } from '@angular/router';
import { IClass} from '../../classes/models/class';
@Component({
  selector: 'app-root',
  templateUrl: './classes.show.component.html',
  styleUrls: []
})
export class ClassesShowComponent implements OnInit {
    model: IClass;

    constructor(private classService: ClassService, private route: ActivatedRoute) {
    }

    ngOnInit(): void {
        const id: number = Number(this.route.snapshot.paramMap.get('id'));
        const classPromise: Promise<IClass> = this.classService.get(id);
        classPromise.then(data => {
            this.model = data;
        });
    }
}
