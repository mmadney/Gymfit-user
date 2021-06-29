import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from 'app/_Models/Product';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  url:string = environment.apiURL + 'Products/';

  constructor(private http:HttpClient) { }

  getProducts(){
    return this.http.get<Product[]>(this.url+'GetProducts');
  }

}
