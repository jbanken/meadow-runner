import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ICustomer} from '../customers/models/customer';
@Injectable()
export class CustomerService {
    customers: ICustomer[] = [
        {
            Id: 1,
            FirstName: 'Joe',
            LastName: 'Banken',
            Email: 'jbanken@meadowrunner.com',
            Phone: '9999999999'
        },
        {
            Id: 2,
            FirstName: 'Mark',
            LastName: 'Petro',
            Email: 'mpetro@meadowrunner.com',
            Phone: '9999999999'
        },
        {
            Id: 3,
            FirstName: 'Mike',
            LastName: 'Sanders',
            Email: 'msanders@meadowrunner.com',
            Phone: '9999999999'
        }
    ];

    constructor(private http: HttpClient) {
    }

    list(): Promise<ICustomer[]> {

        return new Promise((resolve, reject) => {
            resolve(this.customers);
        });
    }

    get(Id): Promise<ICustomer> {

        return new Promise((resolve, reject) => {
            const filteredCustomers = this.customers.filter(cust => cust.Id === Id);
            if (filteredCustomers && filteredCustomers.length) {
                resolve(filteredCustomers[0]);
            }
        });
    }
}
