import { Component, OnInit } from '@angular/core';
import { Category } from 'app/_Models/Category';
import { Product } from 'app/_Models/Product';
import { CategoryService } from 'app/_services/category.service';
import { ProductService } from 'app/_services/product.service';
import { environment } from 'environments/environment';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products:Product[];
  categories:Category[];
  imageUrl:string = environment.imageURL;
  catID:number;
  cartItems:number[];

  url:string;

 constructor(public service: ProductService, public categoryService:CategoryService ) { }

  ngOnInit() {
    this.products = [];
    this.service.getProducts().subscribe(res => {
      this.products = res['Products'];
      this.categoryService.getCategories().subscribe(res => {
        this.categories = res['Categories'];
      });
    });
  }

  filterCategories() {
    this.products = this.products.filter(s => s.CategoryID == this.catID);
  }

  AddToCart(ID:number) {
    this.cartItems.push(ID);
  }
}
