import { Component } from '@angular/core';
import { CustomerService} from '../customers/customers.service';
import { PhonePipe} from '../pipes/phone.pipe';
import { Router} from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent {
    customers = [];
    settings = {};
    constructor(private customerService:CustomerService, private router:Router){
        
    }

    rowClick(event): void {
       this.router.navigate(['/customers/'+event.data.Id]);
    }

    ngOnInit(){

        this.settings = {
            actions: false
            ,hideSubHeader: true
            ,columns: {
                Id: {
                title: 'ID'
                },
                FirstName: {
                title: 'First Name'
                },
                LastName: {
                title: 'Last Name'
                },
                Email: {
                title: 'Email'
                },
                Phone: {
                title: 'Phone'
                }
            }
        };
        
        var customersPromise = this.customerService.list();
        customersPromise.then(data=>{
            this.customers = data;
        });

    }
}
