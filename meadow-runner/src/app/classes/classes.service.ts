import {Injectable} from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Class } from '../classes/models/class';
@Injectable()
export class ClassService{
    classes = [];
    constructor(private http: HttpClient){
        this.classes.push(new Class(1,"Boot Camp"));
        this.classes.push(new Class(2,"Run Club"));
        this.classes.push(new Class(3,"Bro-out class"));
    }

    list():Promise<any>{

        return new Promise((resolve, reject) => {
            resolve(this.classes);
        });
    }

    get(Id):Promise<any>{

        return new Promise((resolve, reject) => {
            var classRec = this.classes.filter(t => t.Id == Id);
            resolve(classRec);
        });
    }
}