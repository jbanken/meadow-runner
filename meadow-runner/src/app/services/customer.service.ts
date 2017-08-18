import {Injectable} from '@angular/core';
import { Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class CustomerService{

    constructor(private http: Http){}

    list(){

        return this.http.get("http://localhost:50099/home/about").map((res:Response) => res.json());

        //return [{name:"joe"}];
    }
}