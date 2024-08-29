import { Component, OnInit } from '@angular/core';
import { User } from '../../model/user.model';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../service/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomerService } from '../../service/customer.service';
import { Customer } from '../../model/customer.model';

@Component({
  selector: 'app-createuser',
  templateUrl: './createuser.component.html',
  styleUrl: './createuser.component.css'
})
export class CreateuserComponent implements OnInit{

  customerForm: FormGroup;
  errorMessage: string | null = null;

  constructor(
    private fb: FormBuilder,
    private customerService: CustomerService,
    private router: Router
  ) {
    // Initialize the form with validation
    this.customerForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      company: ['', Validators.required],
      status: ['Active', Validators.required]
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.customerForm.valid) {
      const newCustomer: Customer = this.customerForm.value;
      this.customerService.createCustomer(newCustomer).subscribe({
        next: () => {
          // Redirect to another page or show a success message
          this.router.navigate(['/view-customers']);
        },
        error: (error) => {
          this.errorMessage = 'Error creating customer. Please try again.';
          console.error('Error creating customer:', error);
        }
      });
    } else {
      this.errorMessage = 'Please fill out all required fields.';
    }
  }
  

}
