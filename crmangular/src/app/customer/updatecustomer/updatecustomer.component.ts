import { Component, OnInit } from '@angular/core';
import { CustomerModel } from '../../model/customer.model';
import { CustomerService } from '../../service/customer.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-updatecustomer',
  templateUrl: './updatecustomer.component.html',
  styleUrls: ['./updatecustomer.component.css']
})
export class UpdatecustomerComponent implements OnInit {

  id?: number;
  customer: CustomerModel = new CustomerModel();

  constructor(
    private customerService: CustomerService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.customerService.getById(this.id!)
      .subscribe({
        next: (res) => {
          this.customer = res;
        },
        error: (error) => {
          console.log('Error fetching customer:', error);
        }
      });
  }

  updateCustomer() {
    this.customerService.updateCustomers(this.id!, this.customer)
      .subscribe({
        next: (res) => {
          console.log('Customer updated successfully:', res);
          this.router.navigate(['/viewcustomer']); // Navigate to the customer list page
        },
        error: (error) => {
          console.log('Error updating customer:', error);
        }
      });
  }
}
