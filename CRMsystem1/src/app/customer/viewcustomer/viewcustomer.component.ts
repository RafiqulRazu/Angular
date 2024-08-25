import { Component, OnInit } from '@angular/core';
import { Customer } from '../../model/customer.model';
import { ActivatedRoute } from '@angular/router';
import { CustomerService } from '../../service/customer.service';

@Component({
  selector: 'app-viewcustomer',
  templateUrl: './viewcustomer.component.html',
  styleUrl: './viewcustomer.component.css'
})
export class ViewcustomerComponent implements OnInit{
  customer: Customer | null = null;
  isLoading = true;
  error: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private customerService: CustomerService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.customerService.getCustomerById(id).subscribe({
        next: (data) => {
          this.customer = data;
          this.isLoading = false;
        },
        error: (err) => {
          this.error = 'Failed to load customer details';
          this.isLoading = false;
          console.error(err);
        }
      });
    } else {
      this.error = 'Invalid customer ID';
      this.isLoading = false;
    }
  }

}
