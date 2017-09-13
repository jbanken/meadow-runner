import { Component } from '@angular/core';
import { CustomerService} from '../../customers/customers.service';
import { ActivatedRoute,Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './customers.edit.component.html',
  styleUrls: []
})
export class CustomersEditComponent {
    model = {Id:"",FirstName:"",LastName:"",Email:"",Phone:""};

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
