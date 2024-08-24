import { Component, OnInit } from '@angular/core';
import { CustomerService } from './customer.service'; // Updated service import
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-customer',  // Updated selector
  templateUrl: './customer.component.html',  // Updated template URL
  styleUrls: ['./customer.component.css']  // Updated style URL
})
export class CustomerComponent implements OnInit {  // Updated class name
  customers: any;  // Updated variable name

  constructor(
    private customerService: CustomerService,  // Updated service
    private router: Router,
    private httpClient: HttpClient
  ) {}

  ngOnInit(): void {
    this.loadCustomers();  // Updated method call
  }

  loadCustomers() {  // Added method to properly handle async data loading
    this.customerService.getAllCustomers().subscribe(data => {  // Updated method
      this.customers = data;
    });
  }

  deleteCustomer(id: string) {  // Updated method name
    this.customerService.deleteCustomer(id)  // Updated service method
      .subscribe({
        next: res => {
          this.loadCustomers();  // Refresh list after deletion
          this.router.navigate(['customer']);  // Updated route
        },
        error: error => {
          console.log(error);
        }
      });
  }

  updateCustomer(id: string) {  // Updated method name
    this.router.navigate(['updatecustomer', id]);  // Updated route
  }
}
