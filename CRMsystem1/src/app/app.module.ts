import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CreatecustomerComponent } from './customer/createcustomer/createcustomer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ViewcustomerComponent } from './customer/viewcustomer/viewcustomer.component';
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
import { UpdatecustomerComponent } from './customer/updatecustomer/updatecustomer.component';
import { CreateactivityComponent } from './activity/createactivity/createactivity.component';
import { ViewactivityComponent } from './activity/viewactivity/viewactivity.component';
import { EditactivityComponent } from './activity/editactivity/editactivity.component';
import { CreateuserComponent } from './user/createuser/createuser.component';
import { ViewuserComponent } from './user/viewuser/viewuser.component';
import { UpdateuserComponent } from './user/updateuser/updateuser.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './loginregistration/login/login.component';
import { RegistrationComponent } from './loginregistration/registration/registration.component';
import { RouterModule } from '@angular/router';
import { LogoutComponent } from './loginregistration/logout/logout.component';
import { UserprofileComponent } from './user/userprofile/userprofile.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CreatecustomerComponent,
    ViewcustomerComponent,
    UpdatecustomerComponent,
    CreateactivityComponent,
    ViewactivityComponent,
    EditactivityComponent,
    CreateuserComponent,
    ViewuserComponent,
    UpdateuserComponent,
    DashboardComponent,
    LoginComponent,
    RegistrationComponent,
    LogoutComponent,
    UserprofileComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  providers: [
    provideClientHydration(),
    provideHttpClient(withFetch())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
