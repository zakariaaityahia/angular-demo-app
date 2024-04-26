import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {observable, Observable} from "rxjs";
import {Product} from "../model/product.model";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  public getProduct(page: number = 1, size=4)  {
    return this.http.get(`http://localhost:8089/products?_page=${page}&_limit=${size} `, {observe: 'response'})
  }

  public checkProduct(product: Product) : Observable<any> {
    return this.http.patch<Product>(`http://localhost:8089/products/${product.id}`,
      {checked: !product.checked})
  }

  public deleteProduct(product : Product) {
    return this.http.delete<any>(`http://localhost:8089/products/${product.id}`)
  }

  saveProduct(product: Product):Observable<Product> {
     return this.http.post<Product>(`http://localhost:8089/products`,
      product)
  }
}
