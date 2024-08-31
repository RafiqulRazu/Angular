import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../../model/user.model';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-createuser',
  templateUrl: './createuser.component.html',
  styleUrl: './createuser.component.css'
})
export class CreateuserComponent {

  userForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router
  ){
    this.userForm= this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      role: ['Admin', Validators.required]
  });
  }
  onSubmit() {
    if (this.userForm.valid) {
      const newUser: Omit<User, 'id'> = {
        name: this.userForm.value.name,
        email: this.userForm.value.email,
        role: this.userForm.value.role,
      };

      this.userService.createUser(newUser).subscribe(() => {
        this.router.navigate(['/users']);
      });
    }
    
  }
}