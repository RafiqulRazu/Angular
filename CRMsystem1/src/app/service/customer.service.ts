// src/app/services/customer.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { Customer } from '../model/customer.model';


@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  private apiUrl = 'http://localhost:3000/customer';  // URL to your local API endpoint

  constructor(private http: HttpClient) {}

  // Get all customers
  getCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.apiUrl);
  }

  // Get a single customer by ID
  getCustomerById(id: number): Observable<Customer> {
    return this.http.get<Customer>(`${this.apiUrl}/${id}`).pipe(
      catchError(error => {
        console.error('Error fetching customer by ID:', error);
        return throwError(() => new Error('Error fetching customer'));
      })
    );
  }

  // Create a new customer
  createCustomer(customer: Omit<Customer, 'id'>): Observable<Customer> {
    return this.http.post<Customer>(this.apiUrl, customer);
  }

  // Update an existing customer
  updateCustomer(id: number, customer: Customer): Observable<Customer> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<Customer>(url, customer);
  }

  // Delete a customer
  deleteCustomer(id: number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);
  }
  

}