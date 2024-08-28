import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CreatecustomerComponent } from './customer/createcustomer/createcustomer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ViewcustomerComponent } from './customer/viewcustomer/viewcustomer.component';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { UpdatecustomerComponent } from './customer/updatecustomer/updatecustomer.component';
import { CreateactivityComponent } from './activity/createactivity/createactivity.component';
import { ViewactivityComponent } from './activity/viewactivity/viewactivity.component';
import { EditactivityComponent } from './activity/editactivity/editactivity.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CreatecustomerComponent,
    ViewcustomerComponent,
    UpdatecustomerComponent,
    CreateactivityComponent,
    ViewactivityComponent,
    EditactivityComponent
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
