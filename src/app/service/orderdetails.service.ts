import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrderdetailsService {
  baseUrl: string;

  constructor(private httpClient: HttpClient) {
    this.baseUrl = "http://localhost:9200/orderdetails";
  }

  // get(cart:string){
  //   try{
  //     return JSON.parse(localStorage.getItem(cart));
  //   }catch(e){
  //     console.error("Error getting data from localStroage",e);
  //     return null;
  //   }
  // }
 add(cart:string){
  console.log(localStorage.getItem('cart'));
 }
}
