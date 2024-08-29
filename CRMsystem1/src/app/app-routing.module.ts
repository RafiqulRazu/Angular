import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatecustomerComponent } from './customer/createcustomer/createcustomer.component';
import { ViewcustomerComponent } from './customer/viewcustomer/viewcustomer.component';
import { UpdatecustomerComponent } from './customer/updatecustomer/updatecustomer.component';
import { CreateactivityComponent } from './activity/createactivity/createactivity.component';
import { ViewactivityComponent } from './activity/viewactivity/viewactivity.component';
import { EditactivityComponent } from './activity/editactivity/editactivity.component';
import { ViewuserComponent } from './user/viewuser/viewuser.component';
import { CreateuserComponent } from './user/createuser/createuser.component';


const routes: Routes = [
  { path:'customers', component:ViewcustomerComponent},
  { path:'createcustomers', component:CreatecustomerComponent},
  { path:'updatecustomer/:id', component:UpdatecustomerComponent},
  { path:'activities', component:ViewactivityComponent},
  { path:'createactivity', component:CreateactivityComponent},
  { path:'editactivity/:id', component:EditactivityComponent},
  { path:'users', component:ViewuserComponent},
  { path:'createuser', component:CreateuserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
