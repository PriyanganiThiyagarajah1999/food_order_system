import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.scss']
})
export class RegistrationPageComponent {
  loginForm: FormGroup;
  Quotedata: any[] = [];
  createPassword: any;
  confirmPassword: any;
  userName: any;
  validationError: boolean = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
  ){
    this.loginForm = this.fb.group({
      userName:['', [Validators.required]],
      createPassword:['', [Validators.required]],
      confirmPassword:['', [Validators.required]],
    })
  }

  register(){
    const existingUserData = localStorage.getItem('Quotedata');
    if (existingUserData) {
      this.Quotedata = JSON.parse(existingUserData);
    } 
    if(this.createPassword == this.confirmPassword){
      const newUser = this.loginForm.value;
      this.Quotedata.push(newUser);
      localStorage.setItem('Quotedata', JSON.stringify(this.Quotedata));
      
      this.validationError= false;
      this.router.navigate(['/login']);
    }
    else{
      this.validationError= true;
    }
  }

}
