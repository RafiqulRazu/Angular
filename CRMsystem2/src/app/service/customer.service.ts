import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Customer } from '../model/customer.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  baseUrl: string = "http://localhost:3000/customer";

  constructor(private httpClient:HttpClient) { }

  getAllCustomer():Observable<any>{
    return this.httpClient.get(this.baseUrl);
  }

  getCustomerForInteraction(): Observable<Customer[]> {

    return this.httpClient.get<Customer[]>(this.baseUrl)
      .pipe(
        catchError(this.handleError)
    )
  }

  private handleError(error:any) {
    console.error('An error occurred:', error);
    return throwError(() => new Error('test'));
  }

  createCustomer(customer: Customer): Observable<any> {
    return this.httpClient.post(this.baseUrl, customer);
  }

  deleteCustomer(id: string): Observable<any>{
    return this.httpClient.delete(this.baseUrl + "/" + id);
  }

  updateCustomer(id: string, customer: Customer): Observable<any>{
    return this.httpClient.put(this.baseUrl + "/" + id, customer);
  }

  getById(id: string):Observable<any>{

    return this.httpClient.get(this.baseUrl+"/" + id);
  }
}
