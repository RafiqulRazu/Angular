import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../service/user.service';
import { Router } from '@angular/router';
import { UserModel } from '../../model/user.model';

@Component({
  selector: 'app-createuser',
  templateUrl: './createuser.component.html',
  styleUrl: './createuser.component.css'
})
export class CreateuserComponent implements OnInit{

  user: UserModel = new UserModel();

  formValue!: FormGroup;
  userData: any;

  constructor(private userService: UserService,
    private router: Router,
    
    private formBuilder: FormBuilder
  ) {


  }

  ngOnInit(): void {
    this.formValue = this.formBuilder.group({

      name: [''],
      email: [''],
      password: [''],
      phone: [''],
      role: [''],
      status: [''],
     

    });

  }


  createUser() {

    this.user.name = this.formValue.value.name;
    this.user.email = this.formValue.value.email;
    this.user.password = this.formValue.value.password;
    this.user.phone = this.formValue.value.phone;
    this.user.role = this.formValue.value.role;
    // this.user.status = this.formValue.value.status;
    


    this.userService.createUser(this.user)
      .subscribe({
        next: res => {
          console.log(res);
          this.formValue.reset();
          this.router.navigate(['/viewuser']);
        },
        error: error => {

          console.log(error);
        }

      });



  }
}