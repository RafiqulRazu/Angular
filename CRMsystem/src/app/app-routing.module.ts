import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './customer/customer.component';  // Adjust path as needed
import { CreateCustomerComponent } from './createcustomer/createcustomer.component';




const routes: Routes = [
  { path: 'customer', component: CustomerComponent },
  { path: 'createcustomer', component:CreateCustomerComponent}

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
