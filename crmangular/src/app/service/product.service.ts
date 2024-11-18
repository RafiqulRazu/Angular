import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductModel } from '../model/product.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  apiUrl: string = "http://localhost:8089/api/product"



  constructor(
    private http: HttpClient
  ) {}

  createProduct(product: ProductModel): Observable<ProductModel> {
    return this.http.post<ProductModel>(this.apiUrl+"/save", product);
  }


  getProductById(productId: number): Observable<ProductModel> {
    return this.http.get<ProductModel>(`${this.apiUrl}/${productId}`);
  }


  getAllProducts(): Observable<ProductModel[]> {
    return this.http.get<ProductModel[]>(`${this.apiUrl}/`);
  }


  updateProduct(productId: number, updatedProduct: ProductModel): Observable<ProductModel> {
    return this.http.put<ProductModel>(`${this.apiUrl}/update/${productId}`, updatedProduct);
  }

  // Delete a product by ID
  deleteProduct(productId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/delete/${productId}`);
  }

  // Update product stock
  updateStock(productId: number, quantity: number): Observable<ProductModel> {
    return this.http.put<ProductModel>(`${this.apiUrl}/${productId}/stock`, { quantity });
  }
}

  // constructor(
  //   private httpClient: HttpClient
  // ) { }


  // getAllProduct(): Observable<ProductModel[]> {
  //   return this.httpClient.get<ProductModel[]>(this.apiUrl);
  // }

  // createProduct(productData: any): Observable<any> {
  //   return this.httpClient.post(this.apiUrl+"save", productData);
  // }

  // deleteProduct(id: number): Observable<any> {
  //   return this.httpClient.delete(this.apiUrl+ "delete/"+ id);
  // }

  // updateProduct(id: number, product: ProductModel): Observable<any> {
  //   return this.httpClient.put<any>(this.apiUrl + "update/" + id, product); 
  // }


  // getById(id: number): Observable<any> {
  //   return this.httpClient.get(this.apiUrl + id);
  // }

