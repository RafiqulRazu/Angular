import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { User } from '../model/user.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserprofileService {

  private baseUrl = 'http://localhost:3000/user';

  constructor(private http: HttpClient, private authService: AuthService) { }

  getUserProfile(): Observable<User | null> {
    return of(this.authService.getUserProfileFromStorage());
  }

  updateUserProfile(user: User): Observable<User> {
    localStorage.setItem('userProfile', JSON.stringify(user));
    return this.http.put<User>(`${this.baseUrl}/${user.id}`, user);
  }
}
