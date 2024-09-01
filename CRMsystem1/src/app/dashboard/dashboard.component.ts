import { Component } from '@angular/core';
import { CustomerService } from '../service/customer.service';
import { ActivityService } from '../service/activity.service';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  totalCustomers: number = 0;
  activeCustomers: number = 0;
  totalActivities: number = 0;
  totalUsers: number = 0;

  constructor(
    private customerService: CustomerService,
    private activityService: ActivityService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.loadDashboardData();
  }

  loadDashboardData(): void {
    // Load total number of customers
    this.customerService.getCustomers().subscribe(customers => {
      this.totalCustomers = customers.length;
      this.activeCustomers = customers.filter(c => c.status === 'Active').length;
    });

    // Load total number of activities
    this.activityService.getActivities().subscribe(activities => {
      this.totalActivities = activities.length;
    });

    // Load total number of users
    this.userService.getUsers().subscribe(users => {
      this.totalUsers = users.length;
    });
  }

}
