import {Injectable} from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Trainer } from '../trainers/models/trainer';
@Injectable()
export class TrainerService{
    trainers = [];
    constructor(private http: HttpClient){
        this.trainers.push(new Trainer(1,"Joe Trainer","Banken","jbanken@meadowrunner.com","9999999999"));
        this.trainers.push(new Trainer(2,"Mark Trainer","Petro","mpetro@meadowrunner.com","9999999999"));
        this.trainers.push(new Trainer(3,"Mike Trainer","Sanders","msanders@meadowrunner.com","9999999999"));
    }

    list():Promise<any>{

        return new Promise((resolve, reject) => {
            resolve(this.trainers);
        });
    }

    get(Id):Promise<any>{

        return new Promise((resolve, reject) => {
            var trainer = this.trainers.filter(t => t.Id == Id);
            resolve(trainer);
        });
    }
}