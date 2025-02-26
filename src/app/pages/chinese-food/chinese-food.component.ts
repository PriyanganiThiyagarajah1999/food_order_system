import { Component } from '@angular/core';
import { AddtoCartService } from 'src/app/services/addto-cart.service';

@Component({
  selector: 'app-chinese-food',
  templateUrl: './chinese-food.component.html',
  styleUrls: ['./chinese-food.component.scss']
})
export class ChineseFoodComponent {
  indexes : any[] = [0,1,2,3,4,5,6,7,8,9,10,11];
  food_names : any[]=[
    "Sticky Char Siu Pork Fried Rice Bowl",
    "Stir Fry Kway Teow Mee",
    "Hong Kong Style Chee Cheong Fun",
    "Vegan Char Siu 'Pork' Bao",
    "Chicken Chow Mein Noodles",
    "Shredded Pork with Garlic Sauce",
    "Kwetiau goreng",
    "Kung Pao Chicken",
    "Fried Wontons",
    "Gold Coin Beef",
    "Siu Mai",
    "Bao Rockville"
  ];

  food_prices : any[]=[
    "$ 14.56",
    "$ 78.69",
    "$ 54.86",
    "$ 48.25",
    "$ 78.95",
    "$ 98.12",
    "$ 14.56",
    "$ 78.69",
    "$ 54.86",
    "$ 48.25",
    "$ 78.95",
    "$ 98.12"
  ];

  food_images : any[]=[
    "assets/28.jpg",
    "assets/29.jpg",
    "assets/35.jpg",
    "assets/36.jpg",
    "assets/38.jpg",
    "assets/39.jpg",
    "assets/30.jpg",
    "assets/31.jpg",
    "assets/32.jpg",
    "assets/33.jpg",
    "assets/34.jpg",
    "assets/37.jpg" 
  ];

  constructor(
    public service: AddtoCartService
  ){}
}
