import {Injectable} from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {Customer} from '../customers/models/customer';
@Injectable()
export class CustomerService{
    customers = [];
    constructor(private http: HttpClient){
        this.customers.push(new Customer(1,"Joe","Banken","jbanken@meadowrunner.com","9999999999"));
        this.customers.push(new Customer(2,"Mark","Petro","mpetro@meadowrunner.com","9999999999"));
        this.customers.push(new Customer(3,"Mike","Sanders","msanders@meadowrunner.com","9999999999"));
    }

    list():Promise<any>{

        return new Promise((resolve, reject) => {
            resolve(this.customers);
        });
    }

    get(Id):Promise<any>{

        return new Promise((resolve, reject) => {
            var customer = this.customers.filter(cust => cust.Id == Id);
            resolve(customer);
        });
    }
}