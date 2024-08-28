import { Component } from '@angular/core';
import { Customer } from '../../model/customer.model';
import { CustomerService } from '../../service/customer.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-createcustomer',
  templateUrl: './createcustomer.component.html',
  styleUrl: './createcustomer.component.css'
})
export class CreatecustomerComponent {
  customerForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private customerService: CustomerService,
    private router: Router
  ) {
    this.customerForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^\d{3}-\d{4}$/)]],
      company: ['', Validators.required],
      status: ['Active', Validators.required]
    });
  }

  onSubmit() {
    if (this.customerForm.valid) {
      const newCustomer: Omit<Customer, 'id'> = {
        name: this.customerForm.value.name,
        email: this.customerForm.value.email,
        phone: this.customerForm.value.phone,
        company: this.customerForm.value.company,
        status: this.customerForm.value.status,
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      this.customerService.createCustomer(newCustomer).subscribe(() => {
        this.router.navigate(['/customers']);
      });
    }
  }
  
}






