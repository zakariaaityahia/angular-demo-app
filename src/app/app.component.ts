import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'demo-app';


  public currentRoute : any;

  constructor(private router: Router) {

  }

  gotoHome() {
    this.currentRoute = "home";
    this.router.navigateByUrl("/home")
  }

  gotoProducts() {
    this.currentRoute = "products";
    this.router.navigateByUrl("/products")
  }

  gotoNewProduct() {
    this.currentRoute = "new-product";
    this.router.navigateByUrl("/new-product")
  }

  actions : Array<any> = [
    {title: "Home", "route" : "/home", icon :  "house"},
    {title: "Products", "route" : "/products", icon :  "search"},
    {title: "New Product", "route" : "/new-product", icon :  "plus  "}
  ]

  currentAction: any;

  setcurrentAction(action: any) {
    this.currentAction = action;
  }
}
