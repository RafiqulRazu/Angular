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
  searchText: string = '';  // Add this property
  selectedRole: string = '';  // Add this property

  constructor(
    private router: Router,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    console.log('Attempting to load users...');
    this.userService.getUsers().subscribe({
      next: (data: User[]) => {
        console.log('Successfully fetched users:', data);
        this.users = data;
      },
      error: (error) => {
        console.error('Error fetching users:', error);
      }
    });
  }

  filterUsers(): User[] {
    return this.users.filter(user => 
      (!this.searchText || user.name.toLowerCase().includes(this.searchText.toLowerCase())) &&
      (!this.selectedRole || user.role === this.selectedRole)
    );
  }


  editUser(id: number): void {
    this.router.navigate(['/edituser', id]);
  }


  deleteUser(id: number): void {
    console.log(`Attempting to delete user with ID: ${id}`);
    if (confirm('Are you sure you want to delete this user?')) {
      this.userService.deleteUser(id).subscribe({
        next: () => {
          console.log(`Successfully deleted user with ID: ${id}`);
          this.users = this.users.filter(user => user.id !== id);
        },
        error: (error) => {
          console.error('Error deleting user:', error);
        }
      });
    }
  }

}
