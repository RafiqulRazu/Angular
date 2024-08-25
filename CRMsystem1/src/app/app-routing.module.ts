import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatecustomerComponent } from './customer/createcustomer/createcustomer.component';
import { ViewcustomerComponent } from './customer/viewcustomer/viewcustomer.component';

const routes: Routes = [
  { path:'createcustomer', component:CreatecustomerComponent},
  { path:'viewcustomer/:id', component:ViewcustomerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
