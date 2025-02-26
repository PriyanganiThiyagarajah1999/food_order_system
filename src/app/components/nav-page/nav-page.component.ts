import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AddtoCartService } from 'src/app/services/addto-cart.service';

@Component({
  selector: 'app-nav-page',
  templateUrl: './nav-page.component.html',
  styleUrls: ['./nav-page.component.scss']
})
export class NavPageComponent {
  Quotedata : any; 
  userName : boolean=false;
  cartData : any;

  constructor(
    private router: Router,
    public service: AddtoCartService
  ){}
  ngOnInit(){
    this.Quotedata = localStorage.getItem('Userdata');
    this.Quotedata = JSON.parse(this.Quotedata);

    this.cartData = localStorage.setItem('cartData', JSON.stringify(this.service));
    console.log(this.Quotedata);
    if(this.Quotedata=='0'){
      this.Quotedata='SIGN UP';
    }
  }

  logout(){
    localStorage.setItem('Userdata','0');
    this.router.navigate(['/login']);
  }

  signUp(){
    this.router.navigate(['/login']);
  }
}
