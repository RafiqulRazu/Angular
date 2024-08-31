import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivityService } from '../../service/activity.service';
import { Router } from '@angular/router';
import { Activity } from '../../model/activity.model';
import { Customer } from '../../model/customer.model';
import { CustomerService } from '../../service/customer.service';
import { User } from '../../model/user.model';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-createactivity',
  templateUrl: './createactivity.component.html',
  styleUrl: './createactivity.component.css'
})
export class CreateactivityComponent {
  activityForm: FormGroup;
  customers: Customer[] = [];
  users: User[] = [];

  constructor(
    private fb: FormBuilder,
    private activityService: ActivityService,
    private customerService: CustomerService,
    private userService: UserService,
    private router: Router
  ) {
    this.activityForm = this.fb.group({
      type: ['Call', Validators.required],
      date: ['', Validators.required],
      description: ['', Validators.required],
      customer: ['', Validators.required],  // Only storing the customer ID or name
      user: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.customerService.getCustomers().subscribe((data: Customer[]) => {
      this.customers = data;
    });

    this.userService.getUsers().subscribe((data: User[]) => {
      this.users = data;
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

    if (this.activityForm.valid) {
      const selectedUser = this.users.find(u => u.name === this.activityForm.value.user);
      if (selectedUser) {
        const newActivity: Activity = {
          ...this.activityForm.value,
          user: selectedUser  
        };

        this.activityService.createActivity(newActivity).subscribe(() => {
          this.router.navigate(['/activities']);
        });
      }
    }
  }


  
}
