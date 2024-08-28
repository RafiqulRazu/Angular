import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomerService } from '../../service/customer.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from '../../model/customer.model';

@Component({
  selector: 'app-updatecustomer',
  templateUrl: './updatecustomer.component.html',
  styleUrl: './updatecustomer.component.css'
})
export class UpdatecustomerComponent implements OnInit{
  customerForm: FormGroup;
  customerId!: number;

  constructor(
    private fb: FormBuilder,
    private customerService: CustomerService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.customerForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^\d{3}-\d{4}$/)]],
      company: ['', Validators.required],
      status: ['Active', Validators.required]
    });
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.customerId = +params.get('id')!;
      this.loadCustomer();
    });
  }

  loadCustomer(): void {
    this.customerService.getCustomerById(this.customerId).subscribe(
      (customer: Customer) => {
        this.customerForm.patchValue(customer);
      },
      (error) => {
        console.error('Error fetching customer:', error);
      }
    );
  }

  onSubmit(): void {
    if (this.customerForm.valid) {
      const updatedCustomer: Customer = {
        ...this.customerForm.value,
        id: this.customerId,
        createdAt: new Date(this.customerForm.value.createdAt),
        updatedAt: new Date()
      };

      this.customerService.updateCustomer(this.customerId, updatedCustomer).subscribe(
        () => {
          this.router.navigate(['/customers']);
        },
        (error) => {
          console.error('Error updating customer:', error);
        }
      );
    }
  }

}
