import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Subcategory } from '../model/Subcategory';
@Injectable({
  providedIn: 'root'
})
export class SubcategoryService {
  baseUrl: string;

  constructor(private httpClient: HttpClient) {
    this.baseUrl = "http://localhost:9200/subcategories";
  }

  getAll():Observable<Subcategory[]>{
    return this.httpClient.get<Subcategory[]>(this.baseUrl);
  }

  getById(subCategoryId: number): Observable<Subcategory> {
    return this.httpClient.get<Subcategory>(`${this.baseUrl}/${subCategoryId}`);
  }
  add(reg: Subcategory): Observable<Subcategory> {
    console.log("url hit" + reg.subCategoryName);
    return this.httpClient.post<Subcategory>(this.baseUrl, reg);
  }
}
