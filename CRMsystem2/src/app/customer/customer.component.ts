import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../service/customer.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.css'
})
export class CustomerComponent implements OnInit{
  customer: any

  constructor(
    private customerService: CustomerService,
    private router: Router,
    private httpClient: HttpClient
  ) {

  }
  

  ngOnInit(): void {
    this.customer = this.customerService.getAllCustomer();
  }

  deleteCustomer(id: string) {
    this.customerService.deleteCustomer(id)
      .subscribe({
        next: res => {
          this.customer = this.customerService.getAllCustomer();
          this.router.navigate(['customer']);
        },
        error: error => {
          console.log(error);

        }

      });

  }

  updateCustomer(id:string){
    this.router.navigate(['updatecustomer',id]);
  }

}
