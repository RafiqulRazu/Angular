import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './customer/customer.component';
import { CreatecustomerComponent } from './createcustomer/createcustomer.component';
import { UpdatecustomerComponent } from './updatecustomer/updatecustomer.component';
import { CreateinteractionComponent } from './interaction/createinteraction/createinteraction.component';
import { ViewinteractionComponent } from './interaction/viewinteraction/viewinteraction.component';
import { UpdateinteractionComponent } from './interaction/updateinteraction/updateinteraction.component';

const routes: Routes = [
  { path:'customer', component:CustomerComponent},
  { path:'createcustomer', component:CreatecustomerComponent},
  { path:'updateCustomer/:id', component:UpdatecustomerComponent},
  { path:'createinteraction', component:CreateinteractionComponent},
  { path:'interaction', component:ViewinteractionComponent},
  { path:'updateinteraction/:id', component:UpdateinteractionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
