import { Component } from '@angular/core';
import { ServiceService} from '../../services/services.service';
import { ActivatedRoute,Router } from '@angular/router';
import { Service} from '../../services/models/service';
@Component({
  selector: 'app-root',
  templateUrl: './services.edit.component.html',
  styleUrls: []
})
export class ServicesEditComponent {
    model:Service;

    constructor(private servicesService:ServiceService,private route: ActivatedRoute,private router:Router){
        
    }

    ngOnInit(){
        let id = this.route.snapshot.paramMap.get('id');
        if(id){
            var servicePromise = this.servicesService.get(id);
            servicePromise.then(data=>{
                this.model = data[0];
            });
        }

    }

    onSubmit(myForm){
        console.log(myForm);
         this.router.navigate(['/services/1']);
    }
}
