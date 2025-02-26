import { Component } from '@angular/core';
import { AddtoCartService } from 'src/app/services/addto-cart.service';

@Component({
  selector: 'app-indian-food',
  templateUrl: './indian-food.component.html',
  styleUrls: ['./indian-food.component.scss']
})
export class IndianFoodComponent {
  indexes : any[] = [0,1,2,3,4,5,6,7,8,9,10,11];
  food_names : any[]=[
    "Idli",
    "Dosa",
    "String Hoppers",
    "Puri",
    "Chappati",
    "Ulundhu vada",
    "Paneer Tika",
    "Tandoori Chicken",
    "Channa Masala",
    "Aloo Parata",
    "Palak Kofta",
    "Puttu"
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
    "assets/40.jpg",
    "assets/42.jpg",
    "assets/43.jpg",
    "assets/44.jpg",
    "assets/45.jpeg",
    "assets/46.jpg",
    "assets/47.jpg",
    "assets/48.jpg",
    "assets/49.jpg",
    "assets/50.jpg",
    "assets/51.jpg",
    "assets/52.jpg" 
  ];

  constructor(
    public service: AddtoCartService
  ){}
}
