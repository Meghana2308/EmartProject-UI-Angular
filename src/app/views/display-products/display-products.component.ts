import { Component, OnInit } from '@angular/core';
import { Products1Service } from 'src/app/service/products1.service';
import { Products1 } from 'src/app/model/products1';


@Component({
  selector: 'app-display-products',
  templateUrl: './display-products.component.html',
  styleUrls: ['./display-products.component.css']
})
export class DisplayProductsComponent implements OnInit {

  pro:Products1[];
  errMsg:string;
  constructor(private proService :Products1Service) { }

  ngOnInit() {
   this.loadData();
  }
  loadData(){
    this.errMsg=null;
    
    this.proService.getAll().subscribe(
      (data)=>{this.pro=data;},
      (err)=>{this.errMsg="Sorry unable to load";}
    );
  }
}


