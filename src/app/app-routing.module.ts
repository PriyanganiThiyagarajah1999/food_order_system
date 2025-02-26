import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { RegistrationPageComponent } from './pages/registration-page/registration-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { ItalianFoodComponent } from './pages/italian-food/italian-food.component';
import { ChineseFoodComponent } from './pages/chinese-food/chinese-food.component';
import { IndianFoodComponent } from './pages/indian-food/indian-food.component';
import { TraditionalFoodComponent } from './pages/traditional-food/traditional-food.component';
import { AddtoCartPageComponent } from './pages/addto-cart-page/addto-cart-page.component';

const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch:'full' },
  {path:'login', component:LoginPageComponent},
  {path:'Register', component:RegistrationPageComponent},
  {path:'traditional', component:TraditionalFoodComponent},
  {path:'home', component:HomePageComponent},
  {path:'indian', component:IndianFoodComponent},
  {path:'italian', component:ItalianFoodComponent},
  {path:'chinese', component:ChineseFoodComponent},
  {path:'addtoCart', component: AddtoCartPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
