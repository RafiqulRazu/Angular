import { Component, OnInit } from '@angular/core';
import { Customer } from '../../model/customer.model';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from '../../service/customer.service';

@Component({
  selector: 'app-viewcustomer',
  templateUrl: './viewcustomer.component.html',
  styleUrl: './viewcustomer.component.css'
})
export class ViewcustomerComponent implements OnInit{


  customers: Customer[] = [];

  constructor(
    private customerService: CustomerService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadCustomers();
  }

  // loadCustomers(): void {
  //   this.customerService.getCustomers().subscribe(
  //     (data: Customer[]) => {
  //       this.customers = data;
  //     },
  //     (error) => {
  //       console.error('Error fetching customers:', error);
  //     }
  //   );
  // }


  loadCustomers(): void {
    console.log('Attempting to load customers...');
    this.customerService.getCustomers().subscribe({
      next: (data: Customer[]) => {
        console.log('Successfully fetched customers:', data);
        this.customers = data;
      },
      error: (error) => {
        console.error('Error fetching customers:', error);
      }
    });
  }

  editCustomer(id: number): void {
    this.router.navigate(['updatecustomer', id]);
  }


  deleteCustomer(id: number): void {
    console.log(`Attempting to delete customer with ID: ${id}`);
    if (confirm('Are you sure you want to delete this customer?')) {
      this.customerService.deleteCustomer(id).subscribe({
        next: () => {
          console.log(`Successfully deleted customer with ID: ${id}`);
          this.customers = this.customers.filter(customer => customer.id !== id);
        },
        error: (error) => {
          console.error('Error deleting customer:', error);
        }
      });
    }
  }
  

  // deleteCustomer(id: number): void {
  //   if (confirm('Are you sure you want to delete this customer?')) {
  //     this.customerService.deleteCustomer(id).subscribe(
  //       () => {
  //         console.log(`Customer with ID ${id} deleted successfully`);
  //         this.customers = this.customers.filter(customer => customer.id !== id);
  //       },
  //       (error) => {
  //         console.error('Error deleting customer:', error);
  //       }
  //     );
  //   }
  // }

  
  

  // customers: Customer[] = [];

  // constructor(private customerService: CustomerService) {}

  // ngOnInit(): void {
  //   this.customerService.getCustomers().subscribe(
  //     (data: Customer[]) => {
  //       this.customers = data;
  //     },
  //     (error) => {
  //       console.error('Error fetching customers:', error);
  //     }
  //   );
  // }
  

}
