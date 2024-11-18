import { Component } from '@angular/core';
import { CustomerModel } from '../../model/customer.model';
import { CustomerService } from '../../service/customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-createcustomer',
  templateUrl: './createcustomer.component.html',
  styleUrls: ['./createcustomer.component.css']
})
export class CreatecustomerComponent {
  customer: CustomerModel = new CustomerModel();

  constructor(
    private customerService: CustomerService,
    private router: Router
  ) {}

  createCustomer() {
    this.customerService.createCustomer(this.customer).subscribe({
      next: (response) => {
        console.log('Customer created successfully:', response);
        this.router.navigate(['/viewcustomer']); // Navigate to the customer list page after creation
      },
      error: (error) => {
        console.error('Error creating customer:', error);
      }
    });
  }
}
