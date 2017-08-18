import { Component } from '@angular/core';
import { CustomerService} from '../services/customer.service';
@Component({
  selector: 'app-root',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent {
    constructor(private customerService:CustomerService){

    }

    ngOnInit(){
        var customersPromise = this.customerService.list();
        customersPromise.subscribe(data=>{
            debugger;
        });
    }
}
