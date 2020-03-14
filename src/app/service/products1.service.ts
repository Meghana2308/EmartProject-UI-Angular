import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Products1 } from '../model/products1';

@Injectable({
  providedIn: 'root'
})
export class Products1Service {

  baseUrl: string;

  constructor(private httpClient: HttpClient) {
    this.baseUrl = "http://localhost:8282/products";
  }

  getAll():Observable<Products1[]>{
    return this.httpClient.get<Products1[]>(this.baseUrl);
  }
  getById(productId: number): Observable<Products1> {
    return this.httpClient.get<Products1>(`${this.baseUrl}/${productId}`);
  }
  add(pro: Products1): Observable<Products1> {
    console.log("url hit" + pro.productName);
    return this.httpClient.post<Products1>(this.baseUrl, pro);
  }
}
