import { Component } from '@angular/core';
import { CustomerService} from '../../customers/customers.service';
import { ActivatedRoute } from '@angular/router';
import { Customer} from '../../customers/models/customer';
@Component({
  selector: 'app-root',
  templateUrl: './customers.show.component.html',
  styleUrls: []
})
export class CustomersShowComponent {
    model:Customer;

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
