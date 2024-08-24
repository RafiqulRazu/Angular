import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './customer/customer.component';  // Adjust path as needed
import { UpdateCustomerComponent } from './update-customer/update-customer.component';  // Adjust path as needed



const routes: Routes = [
  { path: 'customer', component: CustomerComponent },
  { path: 'updatecustomer/:id', component:  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
