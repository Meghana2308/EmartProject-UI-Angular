import { Injectable } from '@angular/core';
import { Category } from '../model/category';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  baseUrl: string;

  constructor(private httpClient: HttpClient) {
    this.baseUrl = "http://localhost:9200/categories";
  }

  getAll():Observable<Category[]>{
    return this.httpClient.get<Category[]>(this.baseUrl);
  }

  getById(categoryId: number): Observable<Category> {
    return this.httpClient.get<Category>(`${this.baseUrl}/${categoryId}`);
  }
  add(reg: Category): Observable<Category> {
    console.log("url hit" + reg.categoryName);
    return this.httpClient.post<Category>(this.baseUrl, reg);
  }
}