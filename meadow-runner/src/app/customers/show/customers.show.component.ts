import { Component } from '@angular/core';
import { CustomerService} from '../../customers/customers.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './customers.show.component.html',
  styleUrls: []
})
export class CustomersShowComponent {
    model = {};

    constructor(private customerService:CustomerService,private route: ActivatedRoute){
        
    }

    ngOnInit(){
        let id = this.route.snapshot.paramMap.get('id');
        var customerPromise = this.customerService.get(id);
        customerPromise.then(data=>{
            this.model = data[0];
        });

    }
}
