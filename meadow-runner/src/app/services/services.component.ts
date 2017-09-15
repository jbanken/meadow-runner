import { Component } from '@angular/core';
import { ServiceService} from '../services/services.service';
import { PhonePipe} from '../pipes/phone.pipe';
import { Router} from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './services.component.html'
})
export class ServicesComponent {
    services = [];
    settings = {};
    constructor(private serviceService:ServiceService, private router:Router){
        
    }

    rowClick(event): void {
       this.router.navigate(['/services/'+event.data.Id]);
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
        
        var servicesPromise = this.serviceService.list();
        servicesPromise.then(data=>{
            this.services = data;
        });

    }
}
