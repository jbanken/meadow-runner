import { Component } from '@angular/core';
import { CustomerService} from '../customers/customers.service';

@Component({
  selector: 'app-root',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent {
    customers = [];

    constructor(private customerService:CustomerService){
        
    }

    ngOnInit(){
        
        var customersPromise = this.customerService.list();
        customersPromise.then(data=>{
            this.customers = data;
        });

    }
}
