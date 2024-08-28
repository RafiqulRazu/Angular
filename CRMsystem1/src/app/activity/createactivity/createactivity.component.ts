import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivityService } from '../../service/activity.service';
import { Router } from '@angular/router';
import { Activity } from '../../model/activity.model';
import { Customer } from '../../model/customer.model';
import { CustomerService } from '../../service/customer.service';

@Component({
  selector: 'app-createactivity',
  templateUrl: './createactivity.component.html',
  styleUrl: './createactivity.component.css'
})
export class CreateactivityComponent {
  activityForm: FormGroup;
  customers: Customer[] = [];

  constructor(
    private fb: FormBuilder,
    private activityService: ActivityService,
    private customerService: CustomerService,
    private router: Router
  ) {
    this.activityForm = this.fb.group({
      type: ['Call', Validators.required],
      date: ['', Validators.required],
      description: ['', Validators.required],
      customer: ['', Validators.required]  // Only storing the customer ID or name
    });
  }

  ngOnInit(): void {
    this.customerService.getCustomers().subscribe((data: Customer[]) => {
      this.customers = data;
    });
  }

  onSubmit(): void {
    if (this.activityForm.valid) {
      const selectedCustomer = this.customers.find(c => c.name === this.activityForm.value.customer);
      if (selectedCustomer) {
        const newActivity: Activity = {
          ...this.activityForm.value,
          customer: selectedCustomer  // Linking the selected customer
        };

        this.activityService.createActivity(newActivity).subscribe(() => {
          this.router.navigate(['/activities']);
        });
      }
    }
  }

  // activityForm: FormGroup;

  // constructor(
  //   private fb: FormBuilder,
  //   private activityService: ActivityService,
  //   private router: Router
  // ) {
  //   this.activityForm = this.fb.group({
  //     type: ['Call', Validators.required],
  //     date: ['', Validators.required],
  //     description: ['', Validators.required],
  //     customer: this.fb.group({
  //       id: ['', Validators.required],
  //       name: ['', Validators.required],
  //       email: ['', [Validators.required, Validators.email]],
  //       phone: ['', Validators.required],
  //       company: ['', Validators.required],
  //       status: ['Lead', Validators.required],
  //       createdAt: ['', Validators.required],
  //       updatedAt: ['', Validators.required],
  //     }),
  //   });
  // }

  // onSubmit(): void {
  //   if (this.activityForm.valid) {
  //     const newActivity: Activity = this.activityForm.value;

  //     this.activityService.createActivity(newActivity).subscribe(() => {
  //       this.router.navigate(['/activities']);
  //     });
  //   }
  // }

}
