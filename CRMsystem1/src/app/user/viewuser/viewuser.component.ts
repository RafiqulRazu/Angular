import { Component, OnInit } from '@angular/core';
import { User } from '../../model/user.model';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-viewuser',
  templateUrl: './viewuser.component.html',
  styleUrl: './viewuser.component.css'
})
export class ViewuserComponent implements OnInit{
  
  users: User[] = [];

  constructor(
    private router: Router,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.userService.getUsers().subscribe({
      next: (data: User[]) => {
        this.users = data;
        console.log('Users loaded:', this.users);  // Debug: Check the data loaded
      },
      error: (error) => {
        console.error('Error fetching users:', error);
      }
    });
  }

  editUser(id: number): void {
    this.router.navigate(['/edituser', id]);
  }

  deleteUser(id: number): void {
    if (confirm('Are you sure you want to delete this user?')) {
      this.userService.deleteUser(id).subscribe({
        next: () => {
          this.users = this.users.filter(user => user.id !== id);
        },
        error: (error) => {
          console.error('Error deleting user:', error);
        }
      });
    }
  }

  

}
