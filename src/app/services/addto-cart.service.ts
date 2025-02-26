import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable({
  providedIn: 'root'
})
export class AddtoCartService {
  isSelected: boolean=false;
  cart: number= 0;
  cartData: any[]=[];
  cartNumber : any;
  constructor(
    private spinner: NgxSpinnerService,
  ) { }

  addtoCart(id:any, item_name: any, item_image: any, item_price: any){
    this.spinner.show();
    this.cart++;
    this.isSelected = true;
    console.log("selected",item_name, item_image, item_price);
    this.cartData=[
      {id :id, 
      item_name : item_name, 
      item_image: item_image, 
      item_price: item_price}
    ];
    localStorage.setItem('cartData', JSON.stringify(this.cartData));

    this.spinner.hide()
  }

  addtoCartIncrease(id: any){
    this.cart++;
    this.isSelected = true;
  }

  addtoCartDecrease(id: any){
    this.cart--;
    this.isSelected = true;
    const index: number=0;
    this.cartData[index].item_price=this.cartData[index].item_price * index;
  }

  remove(id: any){
    if (id<1 ) {
      this.cartData.splice(id, 1);
    }
  }
}
