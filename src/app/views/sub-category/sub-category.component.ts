import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/entities/product.entity';
import { ProductService } from 'src/app/service/product.service';
@Component({
  selector: 'app-sub-category',
  templateUrl: './sub-category.component.html',
  styleUrls: ['./sub-category.component.css']
})
export class SubCategoryComponent implements OnInit {

  public products: Product[];
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.products = this.productService.findAll();
  }

}
