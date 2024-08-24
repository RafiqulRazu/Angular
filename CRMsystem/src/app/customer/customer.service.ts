import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Customer } from './customer.model';  // Updated model import

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  baseUrl: string = "http://localhost:3000/customer";  // URL updated to 'customer'

  constructor(private httpClient: HttpClient) { }

  getAllCustomers(): Observable<any> {  // Renamed method
    return this.httpClient.get(this.baseUrl);
  }

  getCustomersForStudent(): Observable<Customer[]> {  // Renamed method and updated type
    return this.httpClient.get<Customer[]>(this.baseUrl)
      .pipe(
        catchError(this.handleError)
      );
  }

  createCustomer(customer: Customer): Observable<any> {  // Renamed method and parameter
    return this.httpClient.post(this.baseUrl, customer);
  }

  deleteCustomer(id: string): Observable<any> {  // Renamed method
    return this.httpClient.delete(`${this.baseUrl}/${id}`);
  }

  updateCustomer(id: string, customer: Customer): Observable<any> {  // Renamed method and parameter
    return this.httpClient.put(`${this.baseUrl}/${id}`, customer);
  }

  getCustomerById(id: string): Observable<any> {  // Renamed method
    return this.httpClient.get(`${this.baseUrl}/${id}`);
  }

  private handleError(error: any) {
    console.error('An error occurred:', error);
    return throwError(() => new Error('An error occurred while processing your request.'));
  }
}
