import { Component, OnInit } from '@angular/core';
import { Activity } from '../../model/activity.model';
import { ActivityService } from '../../service/activity.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-viewactivity',
  templateUrl: './viewactivity.component.html',
  styleUrl: './viewactivity.component.css'
})
export class ViewactivityComponent implements OnInit{

  activities: Activity[] = [];

  constructor(
    private activityService: ActivityService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadActivities();
  }

  loadActivities(): void {
    this.activityService.getActivities().subscribe({
      next: (data: Activity[]) => {
        this.activities = data;
      },
      error: (error) => {
        console.error('Error fetching activities:', error);
      }
    });
  }

  editActivity(id: number): void {
    this.router.navigate(['/editactivity', id]);
  }

  deleteActivity(id: number): void {
    if (confirm('Are you sure you want to delete this activity?')) {
      this.activityService.deleteActivity(id).subscribe({
        next: () => {
          this.activities = this.activities.filter(activity => activity.id !== id);
        },
        error: (error) => {
          console.error('Error deleting activity:', error);
        }
      });
    }
    
  }

}
