import { Component, OnInit } from '@angular/core';
import { CustomerService} from '../../customers/customers.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ICustomer} from '../../customers/models/customer';
@Component({
  selector: 'app-root',
  templateUrl: './customers.edit.component.html',
  styleUrls: []
})
export class CustomersEditComponent implements OnInit {
    model: ICustomer;

    constructor(private customerService: CustomerService, private route: ActivatedRoute, private router: Router) {
    }

    ngOnInit() {
        const id: number = Number(this.route.snapshot.paramMap.get('id'));
        const customerPromise: Promise<ICustomer> = this.customerService.get(id);
        customerPromise.then(data => {
            this.model = data;
        });
    }

    onSubmit(myForm) {
        console.log(myForm);
         this.router.navigate(['/customers/1']);
    }
}
