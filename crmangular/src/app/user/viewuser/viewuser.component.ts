import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../service/user.service';
import { UserModel } from '../../model/user.model';

@Component({
  selector: 'app-viewuser',
  templateUrl: './viewuser.component.html',
  styleUrl: './viewuser.component.css'
})
export class ViewuserComponent implements OnInit{

 
  user: UserModel[] = [];
  selectedRole: string = '';
  role: string[] = ['ADMIN', 'AGENT', 'SALES_EXECUTIVE'];

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loadUsers();
  }

  // Helper method to load the generics
  loadUsers() {
    this.userService.getUsers().subscribe({
      next: (data: UserModel[]) => {
        this.user = data;
      },
      error: (error) => {
        console.log('Error fetching generics', error);
      }
    });

  }

  
  filteredUsers(): UserModel[] {
    if (!this.selectedRole) {
      return this.user; // If no role selected, return all users
    }
    // Filter users by the selected role
    return this.user.filter(user =>
      user.role === this.selectedRole
    );
  }

  // Method to handle role selection
  onRoleChange(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    this.selectedRole = selectElement.value;
  }
}
