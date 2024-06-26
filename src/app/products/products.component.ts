import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ProductService} from "../services/product.service";
import {Product} from "../model/product.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit{

  products : Array<Product> = [];
  public keyword: string="";
  totalPages: number = 0;
  pageSize: number = 3;
  currentPage: number= 1;

  constructor(private productService: ProductService,
              private router: Router) {
  }

    ngOnInit(): void {
      this.searchProduct();
  }


  searchProduct() {
    this.productService.searchProduct(this.keyword, this.currentPage,this.pageSize)
      .subscribe({
        next: (resp) => {
          this.products =resp.body as Product[];
          let totalPoducts:number = parseInt(resp.headers.get('x-total-count')!);
          this.totalPages = Math.floor(totalPoducts / this.pageSize);
          if(totalPoducts % this.pageSize !=0){
            this.totalPages = this.totalPages + 1;
          }
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

  handleGotoPage(page: number) {
    this.currentPage= page;
    this.searchProduct();
  }


  handleEdit(product: Product) {
    this.router.navigateByUrl(`/editProduct/${product.id}`)
  }
}
