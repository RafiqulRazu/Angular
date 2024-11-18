import { Component, OnInit } from '@angular/core';
import { ActivityModel } from '../../model/activity.model';
import { ActivityService } from '../../service/activity.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CustomerModel } from '../../model/customer.model';
import { UserModel } from '../../model/user.model';
import { CustomerService } from '../../service/customer.service';
import { UserService } from '../../service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-viewactivity',
  templateUrl: './viewactivity.component.html',
  styleUrl: './viewactivity.component.css'
})
export class ViewactivityComponent {


  activities: ActivityModel[] = [];
  customer: CustomerModel[] = [];
  users: UserModel[] = [];

  constructor(
    private activityService: ActivityService,
    private customerService: CustomerService,
    private userService: UserService,
    private router: Router
  ) {}


  ngOnInit(): void {
    this.loadActivities();
    this.loadCustomer();
    this.loadUser();
  }

  loadActivities(): void {
    this.activityService.getAllActivity().subscribe({
      next: (data: ActivityModel[]) => {
        console.log('Fetched activities:', data); // Add this line to debug
        this.activities = data;
      },
      error: (error) => {
        console.error('Error fetching activities:', error);
      }
    });
  }

  loadCustomer(): void {
    this.customerService.getAllCustomer().subscribe({
      next: (data: CustomerModel[]) => {
        this.customer = data;
      },
      error: (error) => {
        console.error('Error fetching activities:', error);
      }
    });
  }

  loadUser(): void {
    this.userService.getUsers().subscribe({
      next: (data: UserModel[]) => {
        this.users = data;
      },
      error: (error) => {
        console.error('Error fetching activities:', error);
      }
    });
  }
  

  editActivity(id: number): void {
    this.router.navigate(['/activities/edit', id]); // Adjusted route for edit activity
  }

  deleteActivity(id: number): void {
    if (confirm('Are you sure you want to delete this activity?')) {
      this.activityService.deleteActivity(id).subscribe({
        next: () => {
          // Remove deleted activity from the array
          this.activities = this.activities.filter(activity => activity.id !== id);
        },
        error: (error) => {
          console.error('Error deleting activity:', error);
        }
      });
    }
  }

  
}
