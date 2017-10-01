import { Component, OnInit } from '@angular/core';
import { ServiceService} from '../services/services.service';
import { PhonePipe} from '../pipes/phone.pipe';
import { Router} from '@angular/router';
import { IService } from './models/service';
@Component({
  selector: 'app-root',
  templateUrl: './services.component.html'
})
export class ServicesComponent implements OnInit {
    services: IService[] = [];
    settings = {};
    constructor(private serviceService: ServiceService, private router: Router) {
    }

    rowClick(event): void {
       this.router.navigate(['/services/' + event.data.Id]);
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

        const servicesPromise: Promise<IService[]> = this.serviceService.list();
        servicesPromise.then(data => {
            this.services = data;
        });
    }
}
