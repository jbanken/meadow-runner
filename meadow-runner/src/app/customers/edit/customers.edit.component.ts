import { Component } from '@angular/core';
import { CustomerService} from '../../customers/customers.service';
import { ActivatedRoute,Router } from '@angular/router';
import { Customer} from '../../customers/models/customer';
@Component({
  selector: 'app-root',
  templateUrl: './customers.edit.component.html',
  styleUrls: []
})
export class CustomersEditComponent {
    model:Customer;

    constructor(private customerService:CustomerService,private route: ActivatedRoute,private router:Router){
        
    }

    ngOnInit(){
        let id = this.route.snapshot.paramMap.get('id');
        if(id){
            var customerPromise = this.customerService.get(id);
            customerPromise.then(data=>{
                this.model = data[0];
            });
        }

    }

    onSubmit(myForm){
        console.log(myForm);
         this.router.navigate(['/customers/1']);
    }
}
