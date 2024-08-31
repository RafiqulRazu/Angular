import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../model/user.model';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = 'http://localhost:3000/user';

  constructor(private http:HttpClient) { }

  



  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  }

  


  getUserById(id: number): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/${id}`).pipe(
      catchError(error => {
        console.error('Error fetching user by ID:', error);
        return throwError(() => new Error('Error fetching user'));
      })
    );
  }

  
  createUser(user: Omit<User, 'id'>): Observable<User> {
    return this.http.post<User>(this.apiUrl, user);
  }


  updateUser(id: number, user: User): Observable<User> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<User>(url, user);
  }


  deleteUser(id: number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);
  }
  
}
