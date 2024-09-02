import { HttpClient, HttpParams } from '@angular/common/http';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { User } from '../model/user.model';
import { BehaviorSubject, catchError, map, Observable } from 'rxjs';
import { AuthResponse } from '../model/auth.response';
import { clear } from 'console';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl: string = "http://localhost:3000/user";
  
  private currentUserSubject: BehaviorSubject<User | null>;
  public currentUser$: Observable<User | null>;

  constructor(
    private http: HttpClient,
    @Inject(PLATFORM_ID) private platformId: Object  
  ) {
    const storedUser = this.isBrowser() ? JSON.parse(localStorage.getItem('currentUser') || 'null') : null;
    this.currentUserSubject = new BehaviorSubject<User | null>(storedUser);
    this.currentUser$ = this.currentUserSubject.asObservable();
  }

  private isBrowser(): boolean {
    return isPlatformBrowser(this.platformId);
  }

  registration(user: User): Observable<AuthResponse> {
    return this.http.post<User>(this.baseUrl, user).pipe(
      map((newUser: User) => {
        const token = btoa(`${newUser.email}${newUser.password}`);
        return { token, user: newUser } as AuthResponse;
      }),
      catchError(error => {
        console.error('Registration error:', error);
        throw error;
      })
    );
  }

  login(credentials: { email: string; password: string }): Observable<AuthResponse> {
    let params = new HttpParams().append('email', credentials.email);

    return this.http.get<User[]>(`${this.baseUrl}`, { params }).pipe(
      map(users => {
        if (users.length > 0) {
          const user = users[0];
          if (user.password === credentials.password) {
            const token = btoa(`${user.email}:${user.password}`);
            this.storeToken(token);
            this.setCurrentUser(user);
            return { token, user } as AuthResponse;
          } else {
            throw new Error('Invalid password');
          }
        } else {
          throw new Error('User not found');
        }
      }),
      catchError(error => {
        console.error('Login error:', error);
        throw error;
      })
    );
  }

  public get currentUserValue(): User | null {
    return this.currentUserSubject.value;
  }

  logout(): void {
    this.clearCurrentUser();
    if (this.isBrowser()) {
      localStorage.removeItem('token');
    }
  }

  private setCurrentUser(user: User): void {
    if (this.isBrowser()) {
      localStorage.setItem('currentUser', JSON.stringify(user));
    }
    this.currentUserSubject.next(user);
  }

  private clearCurrentUser(): void {
    if (this.isBrowser()) {
      localStorage.removeItem('currentUser');
    }
    this.currentUserSubject.next(null);
  }

  isAuthenticated(): boolean {
    return !!this.getToken();
  }

  getToken(): string | null {
    return this.isBrowser() ? localStorage.getItem('token') : null;
  }

  getUserRole(): any  {
    return this.currentUserValue?.role;
  }

  storeToken(token: string): void {
    if (this.isBrowser()) {
      localStorage.setItem('token', token);
    }
  }

  storeUserProfile(user: User): void {
    if (this.isBrowser()) {
      localStorage.setItem('currentUser', JSON.stringify(user));
    }
  }

  getUserProfileFromStorage(): User | null {
    if (this.isBrowser()) {
      const userProfile = localStorage.getItem('currentUser');
      console.log('User Profile is: ', userProfile);
      return userProfile ? JSON.parse(userProfile) : null;
    }
    return null;
  }

  removeUserDetails(): void {
    if (this.isBrowser()) {
      localStorage.clear();
    }
  }
}