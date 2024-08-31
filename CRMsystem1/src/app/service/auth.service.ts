import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../model/user.model';
import { Observable } from 'rxjs';
import { AuthGuard } from '../loginregistration/guard/auth.guard';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  static baseUrl:string="http://localhost:3000/user";

  constructor(private http:HttpClient) { }

  // registration(user:User):Observable<AuthGuard>{
  //   return this.http.post<User>(this.baseUrl, user).pipe(
  //     map((newUser:user=>{
  //       const token=btoa
         
  //     });

  //     )
  //   )
  // }

}
