import { Component, OnInit } from '@angular/core';
import { Payment } from '../model/payment';
import { ActivatedRoute, Router } from '@angular/router';
import { PaymentService } from '../service/payment.service';
import { Observable } from 'rxjs';
import { Item } from 'src/app/entities/item.entity'
import { ProductService } from '../service/product.service';
import { OrderdetailsService } from '../service/orderdetails.service';
import { Payment2 } from '../model/payment2';
import { Billing } from '../model/billing';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent implements OnInit {
  pay: Payment;
  pays: Payment[];
  msg: string;
  isNew: boolean;

  payment =new Payment2("","","","","");
  billing =new Billing("","","","","","");

  public items: Item[] = [];
  public total: number = 0;

  constructor(private paymentService: PaymentService,
    private actRoute: ActivatedRoute,
    private router: Router,
    private orderService: OrderdetailsService) { }

  ngOnInit(): void {

    let payId = this.actRoute.snapshot.params.id;

    if (payId) {
      this.isNew = false;
      this.paymentService.getById(payId).subscribe(
        (data) => {
          this.pay = data;
        }
      );
    } else {
      this.isNew = true;
      this.pay = {
        payId: 0,
        nameOnCard: '',
        creditCardNumber: '',
        expiryMonth: '',
        expiryYear: '',
        cvv: ''
      };
    }
    this.loadCart();
  }

  save() {
    let ob: Observable<Payment>;

    if (this.isNew) {
      ob = this.paymentService.add(this.pay);
    }
    ob.subscribe(
      (data) => {
        this.clear();
        this.router.navigateByUrl("/tqpayment");
      },
      (errResponse) => {
        this.msg = errResponse.error;

      }
    );
  }
  getAll() {
    this.paymentService.getAll().subscribe(
      (data) => { this.pays = data; }
    );
  }

  getById(payId: number) {

    this.paymentService.getById(payId).subscribe(
      () => { this.getAll(); }
    );
  }
  loadCart(): void {
    this.total = 0;
    let quantity1 = 0;
    this.items = [];
    let cart = JSON.parse(localStorage.getItem('cart'));
    for (var i = 0; i < cart.length; i++) {
      let item = JSON.parse(cart[i]);
      this.items.push({
        product: item.product,
        quantity: item.quantity

      });
      this.total += item.product.price * item.quantity;
    }
  }
  clear() {
    this.items = [];
    let cart = JSON.parse(localStorage.getItem('cart'));
    for (var i = 0; i < cart.length; i++) {
      let item = JSON.parse(cart[i]);
      localStorage.removeItem('cart');
    }
  }
}