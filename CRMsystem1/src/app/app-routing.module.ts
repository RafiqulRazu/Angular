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
import { UpdateuserComponent } from './user/updateuser/updateuser.component';
import { RegistrationComponent } from './loginregistration/registration/registration.component';
import { LoginComponent } from './loginregistration/login/login.component';
import { AuthGuard } from './loginregistration/guard/authguard.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LogoutComponent } from './loginregistration/logout/logout.component';



const routes: Routes = [
  { path:'customers', component:ViewcustomerComponent},
  { path:'createcustomers', component:CreatecustomerComponent, canActivate:[AuthGuard]},
  { path:'updatecustomer/:id', component:UpdatecustomerComponent, canActivate:[AuthGuard]},
  { path:'activities', component:ViewactivityComponent},
  { path:'createactivity', component:CreateactivityComponent},
  { path:'editactivity/:id', component:EditactivityComponent},
  { path:'users', component:ViewuserComponent},
  { path:'createuser', component:CreateuserComponent},
  { path:'updateuser/:id', component:UpdateuserComponent},
  { path:'registration', component:RegistrationComponent},
  { path:'login', component:LoginComponent},
  { path:'logout', component:LogoutComponent},
  { path:'dashboard', component:DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
