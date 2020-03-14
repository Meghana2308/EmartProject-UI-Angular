import { Component, OnInit } from '@angular/core';

import { Product } from 'src/app/entities/product.entity';
import { ProductService } from 'src/app/service/product.service';


@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  public products: Product[];

	constructor(
		private productService: ProductService
	) { }

	ngOnInit(): void {
		this.products = this.productService.findAll();
	}



}
