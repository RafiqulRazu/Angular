import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ViewuserComponent } from './user/viewuser/viewuser.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateuserComponent } from './user/createuser/createuser.component';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { CreateactivityComponent } from './activity/createactivity/createactivity.component';
import { CreatecustomerComponent } from './customer/createcustomer/createcustomer.component';
import { ViewcustomerComponent } from './customer/viewcustomer/viewcustomer.component';
import { UpdatecustomerComponent } from './customer/updatecustomer/updatecustomer.component';
import { ViewactivityComponent } from './activity/viewactivity/viewactivity.component';
import { CreateproductComponent } from './product/createproduct/createproduct.component';
import { ViewproductComponent } from './product/viewproduct/viewproduct.component';
import { UpdateproductComponent } from './product/updateproduct/updateproduct.component';
import { CreateleadComponent } from './lead/createlead/createlead.component';
import { ViewleadComponent } from './lead/viewlead/viewlead.component';
import { CreateorderComponent } from './order/createorder/createorder.component';
import { VieworderComponent } from './order/vieworder/vieworder.component';
import { LoginComponent } from './login/login.component';
import { ViewtaskComponent } from './task/viewtask/viewtask.component';
import { CreatetaskComponent } from './task/createtask/createtask.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    ViewuserComponent,
    CreateuserComponent,
    CreateactivityComponent,
    CreatecustomerComponent,
    ViewcustomerComponent,
    UpdatecustomerComponent,
    ViewactivityComponent,
    CreateproductComponent,
    ViewproductComponent,
    UpdateproductComponent,
    CreateleadComponent,
    ViewleadComponent,
    CreateorderComponent,
    VieworderComponent,
    LoginComponent,
    ViewtaskComponent,
    CreatetaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    provideClientHydration(),
    provideHttpClient(
      withFetch())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
