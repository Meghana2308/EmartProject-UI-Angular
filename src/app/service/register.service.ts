import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Register } from '../model/register';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
 baseUrl: string;

  constructor(private httpClient: HttpClient) {
    this.baseUrl = "http://localhost:8100/users";
  }

  getById(userId: number): Observable<Register> {
    return this.httpClient.get<Register>(`${this.baseUrl}/${userId}`);
  }
  add(reg: Register): Observable<Register> {
    console.log("url hit" + reg.userName);
    return this.httpClient.post<Register>(this.baseUrl, reg);
  }
}
