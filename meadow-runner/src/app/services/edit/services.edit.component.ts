import { Component, OnInit } from '@angular/core';
import { ServiceService} from '../../services/services.service';
import { ActivatedRoute, Router } from '@angular/router';
import { IService} from '../../services/models/service';
@Component({
  selector: 'app-root',
  templateUrl: './services.edit.component.html',
  styleUrls: []
})
export class ServicesEditComponent implements OnInit {
    model: IService;

    constructor(private servicesService: ServiceService, private route: ActivatedRoute, private router: Router) {
    }

    ngOnInit() {
        const id: number = Number(this.route.snapshot.paramMap.get('id'));
        if (id) {
            const servicePromise: Promise<IService> = this.servicesService.get(id);
            servicePromise.then(data => {
                this.model = data;
            });
        }

    }

    onSubmit(myForm) {
        console.log(myForm);
         this.router.navigate(['/services/1']);
    }
}
