import {Injectable} from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {Customer} from '../customers/models/customer';
@Injectable()
export class CustomerService{

    constructor(private http: HttpClient){}

    list():Promise<any>{

        return new Promise((resolve, reject) => {
            let customers = [];
            customers.push(new Customer(1,"Joe","Banken","jbanken@meadowrunner.com","999-999-9999"));
            customers.push(new Customer(2,"Mark","Petro","mpetro@meadowrunner.com","999-999-9999"));
            customers.push(new Customer(3,"Mike","Sanders","msanders@meadowrunner.com","999-999-9999"));
        
            resolve(customers);
        });
    }
}