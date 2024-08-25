import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Import FormsModule

import { AppComponent } from './app.component';
import { CustomerComponent } from './customer/customer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { CreateCustomerComponent } from './createcustomer/createcustomer.component';


@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    NavbarComponent,
    CreateCustomerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, // Add FormsModule here
    ReactiveFormsModule
  ],
  providers: [
    provideHttpClient(
      withFetch()
    )
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

