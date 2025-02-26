import { Component } from '@angular/core';
import { AddtoCartService } from 'src/app/services/addto-cart.service';

@Component({
  selector: 'app-addto-cart-page',
  templateUrl: './addto-cart-page.component.html',
  styleUrls: ['./addto-cart-page.component.scss']
})
export class AddtoCartPageComponent {
  cartData: any;
  email: any;
  index: any[] = [0,1,2,3,4,5];

  constructor(
    public service: AddtoCartService
  ){}
  ngOnInit(){
    this.cartData = localStorage.getItem('cartData');
    this.cartData = JSON.parse(this.cartData);
    console.log("item : ", this.cartData)
  }

}
