import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Payment } from '../model/payment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  baseUrl:string;

  constructor(private httpClient :HttpClient) {
    this.baseUrl="http://localhost:9400/payments";
  }

  getAll():Observable<Payment[]>{
    return this.httpClient.get<Payment[]>(this.baseUrl);
  }
  getById(payId:number):Observable<Payment>{
    return this.httpClient.get<Payment>(`${this.baseUrl}/${payId}`);
  }
  add(pay:Payment):Observable<Payment>{
    return this.httpClient.post<Payment>(this.baseUrl,pay);
  }
}
