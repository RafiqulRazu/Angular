import { Component, OnInit } from '@angular/core';
import { Customer } from '../model/customer.model';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CustomerService } from '../service/customer.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-createcustomer',
  templateUrl: './createcustomer.component.html',
  styleUrl: './createcustomer.component.css'
})
export class CreatecustomerComponent implements OnInit{

  customer: Customer = new Customer();
  formValue!: FormGroup;
  customerData: any;
formGroup: any;

  constructor(
    private customerService: CustomerService,
    private router: Router,
    private httpClient: HttpClient,
    private formBuilder: FormBuilder,
  ){}

  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      name: [''],
      email: [''],
      phone: [''],
      company: [''],
      createdAt: [''],
      updateAt: [''],
      status: ['']
    });
  }


  createCustomer(){
    this.customer.name = this.formValue.value.name;
    this.customer.email = this.formValue.value.email;
    this.customer.phone = this.formValue.value.phone;
    this.customer.company = this.formValue.value.company;
    this.customer.createdAt = this.formValue.value.createdAt;
    this.customer.updatedAt = this.formValue.value.updateAt;
    this.customer.status = this.formValue.value.status;


    this.customerService.createCustomer(this.customer)
      .subscribe({
          next: res=>
          {
            console.log(res);
            this.formValue.reset();
            this.router.navigate(['/customer']);
          },

          error: error=>
          {
            console.log(error);
          }

        });

  }

}
