import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit{

  public products : any;
  public keyword: String="";
  
  constructor() {

    }

    ngOnInit(): void {
        this.products =  [
          {"id": 1, "name": "smartphone", "price" :3000},
          {"id": 2, "name": "LAPTOP", "price" :10000},
          {"id": 3, "name": "Mouse", "price" :250},
          {"id": 4, "name": "Monitor", "price" :3500}
      
        ] ; 
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


}
