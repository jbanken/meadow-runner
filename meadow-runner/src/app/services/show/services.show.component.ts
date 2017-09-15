import { Component } from '@angular/core';
import { ServiceService} from '../../services/services.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './services.show.component.html',
  styleUrls: []
})
export class ServicesShowComponent {
    model = {};

    constructor(private serviceService:ServiceService,private route: ActivatedRoute){
        
    }

    ngOnInit(){
        let id = this.route.snapshot.paramMap.get('id');
        var servicePromise = this.serviceService.get(id);
        servicePromise.then(data=>{
            this.model = data[0];
        });

    }
}
