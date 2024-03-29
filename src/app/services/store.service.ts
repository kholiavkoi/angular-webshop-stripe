import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Product } from "@app/models/product.model";

const STORE_BASE_URL = 'https://fakestoreapi.com'
@Injectable({
  providedIn: 'root'
})

export class StoreService {

  constructor(private httpClient: HttpClient) {}

  getAllProducts(limit = '12', sort = 'desc', category?: string): Observable<Product[]> {
    return this.httpClient.get<Product[]>(`${STORE_BASE_URL}/products${category ? `/category/${category}` : ''}?limit=${limit}&sort=${sort}`)
  }

  getAllCategories(): Observable<string[]> {
    return this.httpClient.get<string[]>(`${STORE_BASE_URL}/products/categories`)
  }
}
