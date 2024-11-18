import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CustomerModel } from '../model/customer.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  apiUrl: string = "http://localhost:8089/api/customer"

  constructor(
    private httpClient: HttpClient
  ) { }

  getAllCustomer(): Observable<CustomerModel[]> {
    return this.httpClient.get<CustomerModel[]>(this.apiUrl + '/');
  }

  createCustomer(customerData: any): Observable<any> {
    return this.httpClient.post(this.apiUrl+"/save", customerData);
  }

  deleteCustomer(id: number): Observable<any> {
    return this.httpClient.delete(this.apiUrl+ "/delete/"+ id);
  }

  updateCustomers(id: number, customer: CustomerModel): Observable<any> {
    return this.httpClient.put<any>(this.apiUrl + "/update/" + id, customer); 
  }


  getById(id: number): Observable<any> {
    return this.httpClient.get(this.apiUrl + '/' + id);
  }


}
