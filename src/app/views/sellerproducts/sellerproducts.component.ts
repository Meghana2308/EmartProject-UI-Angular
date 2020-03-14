import { Component, OnInit } from '@angular/core';
import { Products1Service } from 'src/app/service/products1.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Products1 } from 'src/app/model/products1';
import { Observable } from 'rxjs';
import { Products2 } from 'src/app/model/products2';


@Component({
  selector: 'app-sellerproducts',
  templateUrl: './sellerproducts.component.html',
  styleUrls: ['./sellerproducts.component.css']
})
export class SellerproductsComponent implements OnInit {

  pro: Products1;
  msg: string;
  isNew: boolean;

  product =new Products2("","",0,"",0,0);

  constructor(private registerService: Products1Service,
    private actRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    let productId = this.actRoute.snapshot.params.id;

    if (productId) {
      this.isNew = false;
      this.registerService.getById(productId).subscribe(
        (data) => {
          this.pro = data;
        }
      );
    } else {
      this.isNew = true;
      this.pro = {
        productId: 0,
        productName: '',
        productPrice: 0,
        productDesc: '',
        subCategoryId:0
      };
    }
  }

  save() {
    let ob: Observable<Products1>;

    if (this.isNew) {
      ob = this.registerService.add(this.pro);
    }
    ob.subscribe(
      (data) => {
        
        this.router.navigateByUrl("/shop");
      },
      (errResponse) => {
        this.msg = errResponse.error;

      }
    );
  }
}
