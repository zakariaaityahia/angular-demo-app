import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit{

  products : Array<any> = [];
  public keyword: String="";

  constructor(private  http:HttpClient) {
  }

    ngOnInit(): void {

    this.http.get<Array<any>>("http://localhost:8089/products")
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


  handleCheckProduct(products: any) {
    products.checked = !products.checked;
  }
}
