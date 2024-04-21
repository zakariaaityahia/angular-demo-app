import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrl: './new-product.component.css'
})
export class NewProductComponent implements OnInit{
  public productForm!:FormGroup;


  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
     this.productForm = this.fb.group({

     });
    }
}
