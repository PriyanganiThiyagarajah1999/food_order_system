import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { HeaderComponent } from './components/header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegistrationPageComponent } from './pages/registration-page/registration-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { NavPageComponent } from './components/nav-page/nav-page.component';
import { FooterComponent } from './components/footer/footer.component';
import { ItalianFoodComponent } from './pages/italian-food/italian-food.component';
import { ChineseFoodComponent } from './pages/chinese-food/chinese-food.component';
import { IndianFoodComponent } from './pages/indian-food/indian-food.component';
import { TraditionalFoodComponent } from './pages/traditional-food/traditional-food.component';
import { MenuPageComponent } from './pages/menu-page/menu-page.component';
import { AddtoCartPageComponent } from './pages/addto-cart-page/addto-cart-page.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HeaderComponent,
    RegistrationPageComponent,
    LoginPageComponent,
    NavPageComponent,
    FooterComponent,
    ItalianFoodComponent,
    ChineseFoodComponent,
    IndianFoodComponent,
    TraditionalFoodComponent,
    MenuPageComponent,
    AddtoCartPageComponent,
    SpinnerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
