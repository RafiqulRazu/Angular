import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Activity } from '../model/activity.model';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  private apiUrl = 'http://localhost:3000/activities';

  constructor(private http: HttpClient) { }


  getActivities(): Observable<Activity[]> {
    return this.http.get<Activity[]>(this.apiUrl).pipe(
      catchError(this.handleError)
    );
  }

  // Get a single activity by ID
  getActivityById(id: number): Observable<Activity> {
    return this.http.get<Activity>(`${this.apiUrl}/${id}`).pipe(
      catchError(this.handleError)
    );
  }

  // Create a new activity
  createActivity(activity: Activity): Observable<Activity> {
    return this.http.post<Activity>(this.apiUrl, activity).pipe(
      catchError(this.handleError)
    );
  }

  // Update an existing activity
  updateActivity(id: number, activity: Activity): Observable<Activity> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<Activity>(url, activity).pipe(
      catchError(this.handleError)
    );
  }

  // Delete an activity
  deleteActivity(id: number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url).pipe(
      catchError(this.handleError)
    );
  }

  // Error handling
  private handleError(error: any): Observable<never> {
    console.error('An error occurred:', error);
    return throwError(() => new Error('Something went wrong; please try again later.'));
  }
}
