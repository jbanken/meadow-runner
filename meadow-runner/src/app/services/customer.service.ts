import {Injectable} from '@angular/core';
import { HttpClient} from '@angular/common/http';
@Injectable()
export class CustomerService{

    constructor(private http: HttpClient){}

    list(){

        return this.http.get("http://localhost:50099/home/about");

        //return [{name:"joe"}];
    }
}