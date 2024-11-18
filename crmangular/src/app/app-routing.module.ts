import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateuserComponent } from './user/createuser/createuser.component';
import { ViewuserComponent } from './user/viewuser/viewuser.component';
import { CreateactivityComponent } from './activity/createactivity/createactivity.component';
import { ViewactivityComponent } from './activity/viewactivity/viewactivity.component';
import { ViewproductComponent } from './product/viewproduct/viewproduct.component';
import { UpdateproductComponent } from './product/updateproduct/updateproduct.component';
import { CreateproductComponent } from './product/createproduct/createproduct.component';
import { CreateleadComponent } from './lead/createlead/createlead.component';
import { ViewleadComponent } from './lead/viewlead/viewlead.component';
import { ViewcustomerComponent } from './customer/viewcustomer/viewcustomer.component';
import { CreateorderComponent } from './order/createorder/createorder.component';
import { CreatecustomerComponent } from './customer/createcustomer/createcustomer.component';
import { LoginComponent } from './login/login.component';
import { UpdatecustomerComponent } from './customer/updatecustomer/updatecustomer.component';

const routes: Routes = [
  { path:"", component:LoginComponent},
  { path:"createuser", component:CreateuserComponent},
  { path:"viewuser", component:ViewuserComponent},
  { path:"createcustomer", component:CreatecustomerComponent},
  { path:"updatecustomer/:id", component:UpdatecustomerComponent},
  { path:"viewcustomer", component:ViewcustomerComponent},
  { path:"viewact", component:ViewactivityComponent},
  { path:"createact", component:CreateactivityComponent},
  { path:"createproduct", component:CreateproductComponent},
  { path:"viewproduct", component:ViewproductComponent},
  { path:"updateproduct/:id", component:UpdateproductComponent},
  { path:"createlead", component:CreateleadComponent},
  { path:"viewlead", component:ViewleadComponent},
  { path:"createorder", component:CreateorderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
