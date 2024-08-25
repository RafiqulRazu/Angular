// import { Component, OnInit } from '@angular/core';
// import { CustomerService } from '../customer/customer.service';
// import { Route, Router } from '@angular/router';
// import { HttpClient } from '@angular/common/http';
// import { FormBuilder, FormGroup } from '@angular/forms';
// import { Customer } from '../customer/customer.model';

// @Component({
//   selector: 'app-createcustomer',
//   templateUrl: './createcustomer.component.html',
//   styleUrl: './createcustomer.component.css'
// })
// export class CreatelocationComponent implements OnInit {

//   customer: Customer = new Customer();
//   formValue!: FormGroup;
//   customerData: any;
//   customer: any;

//   constructor(
//     private customerService: CustomerService,
//     private router: Router,
//     private httpClient: HttpClient,
//     private formBuilder: FormBuilder,
    
//   ) {

//   }


//   ngOnInit(): void {

//     this.formValue = this.formBuilder.group({
//       name: [''],
//       email: [''],
//       phone: ['']
//     }
//     );


//   }


//   createCustomer() {

//     this.customer.name = this.formValue.value.name;
//     this.customer.email = this.formValue.value.city;
//     this.customer.phone = this.formValue.value.state;
    

    
//     this.customerService.createCustomer(this.customer)
//       .subscribe({
//           next: res=>
//           {
//             console.log(res);
//             this.formValue.reset();
//             this.router.navigate(['/location']);
//           },

//           error: error=>
//           {
//             console.log(error);
//           }

//         });

//   }

// }





import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer/customer.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Customer } from '../customer/customer.model';

@Component({
  selector: 'app-createcustomer',
  templateUrl: './createcustomer.component.html',
  styleUrls: ['./createcustomer.component.css']  // Fix the typo here
})
export class CreateCustomerComponent implements OnInit {  // Rename the class

  customer: Customer = new Cus
  formValue!: FormGroup;
  customerData: any;

  constructor(
    private customerService: CustomerService,
    private router: Router,
    private formBuilder: FormBuilder,
  ) {}

  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      name: [''],
      email: [''],
      phone: ['']
    });
  }

  createCustomer(): void {
    this.customer.name = this.formValue.value.name;
    this.customer.email = this.formValue.value.email;  // Fix property assignment
    this.customer.phone = this.formValue.value.phone;  // Fix property assignment

    this.customerService.createCustomer(this.customer)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.formValue.reset();
          this.router.navigate(['/customer']);  
        },
        error: (error) => {
          console.log(error);
        }
      });
  }
}
