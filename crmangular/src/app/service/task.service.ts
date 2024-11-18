import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TaskModel } from '../model/task.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = "http://localhost:8089/api/task"

  constructor(
    private http: HttpClient
  ) { }

  getAllTask(): Observable<TaskModel[]> {
    return this.http.get<TaskModel[]>(`${this.apiUrl}/`);
  }

  createTask(activity: TaskModel): Observable<TaskModel> {
    return this.http.post<TaskModel>(`${this.apiUrl}/save`, activity);
  }


  deleteTask(activityId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/delete/${activityId}`);
  }


  updateTask(activityId: number, updatedActivity: TaskModel): Observable<TaskModel> {
    return this.http.put<TaskModel>(`${this.apiUrl}/update/${activityId}`, updatedActivity);
  }


  getTaskById(activityId: number): Observable<TaskModel> {
    return this.http.get<TaskModel>(`${this.apiUrl}/${activityId}`);
  }
}
