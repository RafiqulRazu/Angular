import { Component, OnInit } from '@angular/core';
import { Customer } from '../model/customer.model';
import { CustomerService } from '../service/customer.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-updatecustomer',
  templateUrl: './updatecustomer.component.html',
  styleUrl: './updatecustomer.component.css'
})
export class UpdatecustomerComponent implements OnInit{

  id: string = "";
  customer: Customer = new Customer();

  constructor(
    private customerService: CustomerService,
    private router: Router,
    private route: ActivatedRoute,
  ) {}


  ngOnInit(): void {
    this.customer = new Customer();
    this.id = this.route.snapshot.params['id'];
    this.customerService.getById(this.id)
      .subscribe({
        next: res => {
          this.customer = res;
          console.log(res);
        },

        error: err => {
          console.log(err);
        }
      });
  }

  updateCustomer() {

    this.customerService.updateCustomer(this.id, this.customer)
      .subscribe({
        next: res => {
          //this.customer=new Customer();
          this.router.navigate(['customer']);

        },
        error: err => {
          console.log(err);
        }
      });
    }
}
