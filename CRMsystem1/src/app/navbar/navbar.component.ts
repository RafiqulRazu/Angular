import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { User } from '../model/user.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit{

  userRole: string | null = '';
  currentUser: User| null = null;
  
  constructor(private authService:AuthService){

  }


  ngOnInit(): void {
    this.authService.currentUser$.subscribe(user => {
      this.currentUser = user;
      this.userRole = user?.role || null;
    });
  }


}
