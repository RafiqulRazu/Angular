import { Component } from '@angular/core';
import { UserModel } from '../../model/user.model';
import { CustomerModel } from '../../model/customer.model';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from '../../service/user.service';
import { CustomerService } from '../../service/customer.service';
import { ActivityService } from '../../service/activity.service';
import { ActivityModel } from '../../model/activity.model';
import { LeadService } from '../../service/lead.service';
import { LeadModel } from '../../model/lead.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-createlead',
  templateUrl: './createlead.component.html',
  styleUrl: './createlead.component.css'
})
export class CreateleadComponent {

  activityForm!: FormGroup;
  lead: LeadModel = new LeadModel();
  users: UserModel[] = [];
  customers: CustomerModel[] = [];
  salesExecutives: UserModel[] = []; // Array to store sales executive users
  activities: ActivityModel[] = []

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private customerService: CustomerService,
    private activityService: ActivityService,
    private leadService: LeadService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.initializeForm();
    this.loadUsers();
    this.loadActivities();
  }

  // Initialize the form
  initializeForm() {
    this.activityForm = this.fb.group({
      activity: [''], // Updated field name
      salesExecutiveId: [''], // Updated field name
      status: [''],
      createdAt: [''],
      updatedAt: ['']
    });
  }

  // Load users
  loadUsers() {
    this.userService.getUsers().subscribe((data: UserModel[]) => {
      this.users = data;
      this.filterSalesExecutives(); // Call method to filter sales executives after loading users
    });
  }

  // Load customers
  loadCustomers() {
    this.customerService.getAllCustomer().subscribe((data: CustomerModel[]) => {
      this.customers = data;
    });
  }

  // Load activities
  loadActivities() {
    this.activityService.getAllActivity().subscribe((data: ActivityModel[]) => {
      this.activities = data; // Store activities
    });
  }

  // Filter users to get only sales executives
  filterSalesExecutives() {
    this.salesExecutives = this.users.filter(user => user.role === 'SALES_EXECUTIVE'); // Filter sales executives based on role
  }

  // Handle form submission
  onSubmit() {
    if (this.activityForm.valid) {

      let selectedSalesExecutive = new UserModel();
      selectedSalesExecutive.id = this.activityForm.value.salesExecutiveId;
      this.lead.salesExecutive = selectedSalesExecutive;

      this.lead.activity = this.activityForm.value.activity;
      this.lead.status = this.activityForm.value.status;
      this.lead.createdAt = this.activityForm.value.createdAt;
      this.lead.updatedAt = this.activityForm.value.updatedAt;
      this.leadService.createLead(this.lead).subscribe({
        next: res => {
          console.log(res);
          this.router.navigate(['/viewlead'])
        },
        error: error => {
          console.log(error);
        }
      })
    }
  }

}
