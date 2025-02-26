import { Component } from '@angular/core';
import { AddtoCartService } from 'src/app/services/addto-cart.service';

@Component({
  selector: 'app-italian-food',
  templateUrl: './italian-food.component.html',
  styleUrls: ['./italian-food.component.scss']
})
export class ItalianFoodComponent {
  indexes : any[] = [0,1,2,3,4,5,6,7,8,9,10,11];
  food_names : any[]=[
    "Saltimbocca alla Romana",
    "Crispy Milanese Chicken",
    "Chipotle Beer Shrimp Pasta",
    "Smoked Salmon Carpaccio",
    "veal with porcini mushroom",
    "Beef Cannelloni with Spinach",
    "caesar salad",
    "Eggs Florentine",
    "Italian Meatballs",
    "spaghetti bolognese",
    "Focaccia Sandwich",
    "Steak tartare"
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
    "assets/17.jpg",
    "assets/18.jpeg",
    "assets/19.jpg",
    "assets/20.jpg",
    "assets/21.jpg",
    "assets/22.jpg",
    "assets/23.jpeg",
    "assets/24.jpg",
    "assets/25.jpg",
    "assets/16.jpg",
    "assets/26.jpg",
    "assets/27.jpg" 
  ];

  constructor(
    public service: AddtoCartService
  ){}
}
