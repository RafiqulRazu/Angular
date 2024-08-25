import { Component } from '@angular/core';
import { Customer } from '../../model/customer.model';
import { CustomerService } from '../../service/customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-createcustomer',
  templateUrl: './createcustomer.component.html',
  styleUrl: './createcustomer.component.css'
})
export class CreatecustomerComponent {
  customer: Customer = new Customer();
  statusOptions = ['Active', 'Inactive', 'Prospect', 'Lead']; // Options for status

  constructor(private customerService: CustomerService, private router: Router) {}

  onSubmit(): void {
    this.customer.createdAt = new Date();
    this.customer.updatedAt = new Date();
    
    this.customerService.createCustomer(this.customer).subscribe({
      next: (response) => {
        console.log('Customer created:', response);
        this.router.navigate(['/customers']); // Navigate to the customer list or another route after creation
      },
      error: (error) => {
        console.error('Error creating customer:', error);
      }
    });
  }

}






