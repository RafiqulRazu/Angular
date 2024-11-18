import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { OrderModel } from '../model/order.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  apiUrl:string="http://localhost:8089/api/order/"

  constructor(
    private httpClient: HttpClient
  ) { }

  getAllOrder(): Observable<any[]> {
    return this.httpClient.get<any[]>(this.apiUrl);
  }

  createOrder(order: OrderModel): Observable<OrderModel[]> {

    return this.httpClient.post<OrderModel[]>(this.apiUrl+"save", order);
  }

}

