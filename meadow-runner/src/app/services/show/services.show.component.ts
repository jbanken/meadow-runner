import { Component, OnInit } from '@angular/core';
import { ServiceService} from '../../services/services.service';
import { ActivatedRoute } from '@angular/router';
import { IService} from '../../services/models/service';
@Component({
  selector: 'app-root',
  templateUrl: './services.show.component.html',
  styleUrls: []
})
export class ServicesShowComponent implements OnInit {
    model: IService;

    constructor(private serviceService: ServiceService, private route: ActivatedRoute) {
    }

    ngOnInit(): void {
        const id: number = Number(this.route.snapshot.paramMap.get('id'));
        const servicePromise: Promise<IService> = this.serviceService.get(id);
        servicePromise.then(data => {
            this.model = data;
        });
    }
}
