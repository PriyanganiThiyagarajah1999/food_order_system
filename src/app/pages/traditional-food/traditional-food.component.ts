import { Component } from '@angular/core';
import { AddtoCartService } from 'src/app/services/addto-cart.service';

@Component({
  selector: 'app-traditional-food',
  templateUrl: './traditional-food.component.html',
  styleUrls: ['./traditional-food.component.scss']
})
export class TraditionalFoodComponent {
  indexes : any[] = [0,1,2,3,4,5,6,7,8,9,10,11];
  food_names : any[]=[
    "Hopppers",
    "Kottu",
    "Milk Rice",
    "Fried Rice",
    "Rice and Curry",
    "Rotti",
    "Ceylon Parata",
    "Dolphin Koththu",
    "Polos Cuurry",
    "Chicken Biriyani",
    "Mutton Biriyani",
    "Chicken Shawarma"
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
    "assets/53.jpg",
    "assets/54.jpg",
    "assets/55.jpg",
    "assets/56.jpg",
    "assets/57.jpg",
    "assets/58.jpeg",
    "assets/59.jpg",
    "assets/60.jpg",
    "assets/61.jpg",
    "assets/62.jpg",
    "assets/63.jpg",
    "assets/64.jpg" 
  ];

  constructor(
    public service: AddtoCartService
  ){}
}
