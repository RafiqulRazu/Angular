import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerComponent } from './customer/customer.component';
import { CreatecustomerComponent } from './createcustomer/createcustomer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { UpdatecustomerComponent } from './updatecustomer/updatecustomer.component';
import { RouterModule } from '@angular/router';
import { CreateinteractionComponent } from './interaction/createinteraction/createinteraction.component';
import { ViewinteractionComponent } from './interaction/viewinteraction/viewinteraction.component';
import { UpdateinteractionComponent } from './interaction/updateinteraction/updateinteraction.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    CreatecustomerComponent,
    UpdatecustomerComponent,
    CreateinteractionComponent,
    ViewinteractionComponent,
    UpdateinteractionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration(),
    provideHttpClient(withFetch())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
