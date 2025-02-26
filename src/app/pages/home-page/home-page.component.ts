import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { AddtoCartService } from 'src/app/services/addto-cart.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnDestroy {
  index: number = 0;
  
  indexes : any[] = [0,1,2,3,4,5];
  food_names : any[]=[
    "Cheese Burger",
    "Pepperoni Pizza",
    "Pasta",
    "Biriyani",
    "Lasagna",
    "Dumblings"
  ];

  food_prices : any[]=[
    "$ 14.56",
    "$ 78.69",
    "$ 54.86",
    "$ 48.25",
    "$ 78.95",
    "$ 98.12"
  ];

  food_images : any[]=[
    "assets/10.jpg",
    "assets/11.jpg",
    "assets/12.jpg",
    "assets/13.jpg",
    "assets/14.jpg",
    "assets/15.jpg"
  ];

  images: string[] = [
    "assets/bg-header.png",
    "assets/bg-header3.png",
    "assets/bg-header4.png"
  ];
  image: string = this.images[this.index];
  interval: any;

  constructor(
    private router: Router,
    public service: AddtoCartService
  ) {
  }

  ngOnDestroy() {
    this.stopTimer();
  }

  startTimer() {
    this.interval = setInterval(() => {
      this.nextImage();
    }, 5000); 
  }

  stopTimer() {
    clearInterval(this.interval);
  }

  submit() {
    this.router.navigate(['/menu']);
  }

  nextImage() {
    this.index++;
    if (this.index >= this.images.length) {
      this.index = 0; 
    }
    this.image = this.images[this.index];
  }
}
