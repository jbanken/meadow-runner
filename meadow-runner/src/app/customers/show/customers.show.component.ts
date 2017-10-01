import { Component, OnInit } from '@angular/core';
import { CustomerService} from '../../customers/customers.service';
import { ActivatedRoute } from '@angular/router';
import { ICustomer} from '../../customers/models/customer';
@Component({
  selector: 'app-root',
  templateUrl: './customers.show.component.html',
  styleUrls: []
})
export class CustomersShowComponent implements OnInit {
    model: ICustomer;

    constructor(private customerService: CustomerService, private route: ActivatedRoute) {
    }

    ngOnInit(): void {
        const id: number = Number(this.route.snapshot.paramMap.get('id'));
        const customerPromise: Promise<ICustomer> = this.customerService.get(id);
        customerPromise.then(data => {
            this.model = data;
        });

    }
}
