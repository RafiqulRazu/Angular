import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivityService } from '../../service/activity.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Activity } from '../../model/activity.model';
import { Customer } from '../../model/customer.model';
import { CustomerService } from '../../service/customer.service';

@Component({
  selector: 'app-editactivity',
  templateUrl: './editactivity.component.html',
  styleUrl: './editactivity.component.css'
})
export class EditactivityComponent implements OnInit{


  activityForm!: FormGroup;
  activityId!: number;
  customers: Customer[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private activityService: ActivityService,
    private customerService: CustomerService
  ) {}

  ngOnInit(): void {
    this.activityId = +this.route.snapshot.paramMap.get('id')!;
    
    this.activityForm = this.formBuilder.group({
      type: ['', Validators.required],
      date: ['', Validators.required],
      description: ['', Validators.required],
      customer: this.formBuilder.group({
        id: ['', Validators.required],
        name: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        phone: ['', Validators.required],
        company: ['', Validators.required],
        status: ['', Validators.required],
        createdAt: [''],
        updatedAt: ['']
      })
    });

    this.loadCustomers();
    this.loadActivity();
  }

  loadCustomers(): void {
    this.customerService.getCustomers().subscribe({
      next: (data: Customer[]) => {
        this.customers = data;
      },
      error: err => {
        console.error('Error loading customers:', err);
      }
    });
  }

  loadActivity(): void {
    this.activityService.getActivityById(this.activityId).subscribe({
      next: (activity: Activity) => {
        this.activityForm.patchValue({
          type: activity.type,
          date: activity.date,
          description: activity.description,
          customer: activity.customer
        });
      },
      error: err => {
        console.error('Error loading activity:', err);
      }
    });
  }

  updateActivity(): void {
    if (this.activityForm.valid) {
      const updatedActivity: Activity = this.activityForm.value;
      
      this.activityService.updateActivity(this.activityId, updatedActivity).subscribe({
        next: () => {
          console.log('Activity updated successfully');
          this.router.navigate(['/activities']);
        },
        error: err => {
          console.error('Error updating activity:', err);
        }
      });
    }
  }

  // activityForm: FormGroup;
  // activityId!: number;

  // constructor(
  //   private fb: FormBuilder,
  //   private activityService: ActivityService,
  //   private route: ActivatedRoute,
  //   private router: Router
  // ) {
  //   this.activityForm = this.fb.group({
  //     type: ['', Validators.required],
  //     date: ['', Validators.required],
  //     description: ['', Validators.required],
  //     customer: this.fb.group({
  //       id: ['', Validators.required],
  //       name: ['', Validators.required],
  //       email: ['', [Validators.required, Validators.email]],
  //       phone: ['', Validators.required],
  //       company: ['', Validators.required],
  //       status: ['', Validators.required],
  //       createdAt: ['', Validators.required],
  //       updatedAt: ['', Validators.required],
  //     }),
  //   });
  // }

  // ngOnInit(): void {
  //   this.activityId = +this.route.snapshot.paramMap.get('id')!;
  //   this.loadActivity();
  // }

  // loadActivity(): void {
  //   this.activityService.getActivityById(this.activityId).subscribe({
  //     next: (activity) => {
  //       this.activityForm.patchValue(activity);
  //     },
  //     error: (error) => {
  //       console.error('Error loading activity:', error);
  //     }
  //   });
  // }

  // onSubmit(): void {
  //   if (this.activityForm.valid) {
  //     const updatedActivity: Activity = this.activityForm.value;

  //     this.activityService.updateActivity(this.activityId, updatedActivity).subscribe(() => {
  //       this.router.navigate(['/activities']);
  //     });
  //   }
  // }

}
