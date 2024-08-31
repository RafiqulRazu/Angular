import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../service/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../../model/user.model';

@Component({
  selector: 'app-updateuser',
  templateUrl: './updateuser.component.html',
  styleUrl: './updateuser.component.css'
})
export class UpdateuserComponent implements OnInit{
  userForm: FormGroup;
  userId!: number;


  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.userForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      role: ['', ['Admin', Validators.required]],
    });
  }


  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.userId = +params.get('id')!;
      this.loadUser();
    });
  }

  loadUser(): void {
    this.userService.getUserById(this.userId).subscribe(
      (user: User) => {
        this.userForm.patchValue(user);
      },
      (error) => {
        console.error('Error fetching user:', error);
      }
    );
  }


  onSubmit(): void {
    if (this.userForm.valid) {
      const updatedUser: User = {
        ...this.userForm.value,
        id: this.userId,
      };

      this.userService.updateUser(this.userId, updatedUser).subscribe(
        () => {
          this.router.navigate(['/users']);
        },
        (error) => {
          console.error('Error updating user:', error);
        }
      );
    }
  }

}
