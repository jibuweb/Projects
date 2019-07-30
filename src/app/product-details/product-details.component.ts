import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { IProduct } from '../iproduct';
import { ProductService } from '../product.service';



@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.product = ProductService[+params.get('productId')];
    });
  }

}
