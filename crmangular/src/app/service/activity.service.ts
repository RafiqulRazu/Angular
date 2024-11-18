import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivityModel } from '../model/activity.model';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  apiUrl:string = "http://localhost:8089/api/act"

  constructor(
    private httpClient: HttpClient
  ) { }

  getAllActivity(): Observable<ActivityModel[]> {
    return this.httpClient.get<ActivityModel[]>(`${this.apiUrl}/`);
  }

  createActivity(activity: ActivityModel): Observable<ActivityModel> {
    return this.httpClient.post<ActivityModel>(`${this.apiUrl}/save`, activity);
  }


  deleteActivity(activityId: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.apiUrl}/delete/${activityId}`);
  }


  updateActivity(activityId: number, updatedActivity: ActivityModel): Observable<ActivityModel> {
    return this.httpClient.put<ActivityModel>(`${this.apiUrl}/update/${activityId}`, updatedActivity);
  }


  getActivityById(activityId: number): Observable<ActivityModel> {
    return this.httpClient.get<ActivityModel>(`${this.apiUrl}/${activityId}`);
  }
}
