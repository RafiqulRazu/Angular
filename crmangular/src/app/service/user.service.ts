import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserModel } from '../model/user.model';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl:string = "http://localhost:8089/api/user/"

  constructor(private http:HttpClient) { }

  getUsers(): Observable<UserModel[]> {
    return this.http.get<UserModel[]>(this.apiUrl);
  }

  getUserById(id: number): Observable<UserModel> {
    return this.http.get<UserModel>(`${this.apiUrl}/${id}`).pipe(
      catchError(error => {
        console.error('Error fetching user by ID:', error);
        return throwError(() => new Error('Error fetching user'));
      })
    );
  }


  createUser(user: Omit<UserModel, 'id'>): Observable<UserModel> {
    return this.http.post<UserModel>(`${this.apiUrl}save`, user);
  }

  updateUser(id: number, user: UserModel): Observable<UserModel> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<UserModel>(url, user);
  }

  deleteUser(id: number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);
  }

}
