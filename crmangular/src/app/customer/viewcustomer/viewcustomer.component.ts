import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../service/customer.service';
import { Router } from '@angular/router';
import { CustomerModel } from '../../model/customer.model';

@Component({
  selector: 'app-viewcustomer',
  templateUrl: './viewcustomer.component.html',
  styleUrl: './viewcustomer.component.css'
})
export class ViewcustomerComponent implements OnInit {

  customers: CustomerModel[] = [];

  constructor(
    private customerService: CustomerService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadCustomers();
  }

  loadCustomers() {
    this.customerService.getAllCustomer().subscribe({
      next: (data: CustomerModel[]) => {
        this.customers = data;
      },
      error: (error) => {
        console.log('Error fetching customers', error);
      }
    });
  }

  deleteCustomer(id: number) {
    if (confirm('Are you sure you want to delete this customer?')) {
      this.customerService.deleteCustomer(id).subscribe({
        next: () => {
          this.loadCustomers(); // Refresh the list after deletion
        },
        error: (error) => {
          console.log('Error deleting customer', error);
        }
      });
    }
  }

  updateCustomer(id: number) {
    this.router.navigate(['/updatecustomer', id]);
  }
}
