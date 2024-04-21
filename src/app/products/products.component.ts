import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ProductService} from "../services/product.service";
import {Product} from "../model/product.model";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit{

  products : Array<Product> = [];
  public keyword: String="";

  constructor(private productService: ProductService) {
  }

    ngOnInit(): void {
      this.getProducts();
  }


  getProducts() {
    this.productService.getProduct()
      .subscribe({
        next: data => {
          this.products =data
          },
        error : err => {
          console.log(err)
        }
      })
  }

    deleteProduct(p : any) {
      let index = this.products.indexOf(p);
      this.products.splice(index, 1);
    }

    search() {
      // console.log(this.keyword)
      // let result = [];
      // for(let p of this.products) {
      //   if(p.name.includes(this.keyword)){
      //     result.push(p)
      //   }
      // }
      // this.products = result;

      this.products = this.products.filter((p:any)=>p.name.includes(this.keyword))

    }


  handleCheckProduct(products: Product) {
    this.productService.checkProduct(products).subscribe({
      next: updatedProduct => {
        // this.products.map(p => {
        //   if(p.id == products.id) {
        //     return updatedProduct;
        //   } else return p;
        // })
        products.checked = !products.checked;
        //this.getProducts();
      }
     })





  }

  handleDelete(product: Product) {
    if (confirm("Are you sure ?"))
    this.productService.deleteProduct(product).subscribe({
      next: value => {
        //this.getProducts();
        this.products= this.products.filter(p=>p.id!=product.id);
      }
    })
  }
}
