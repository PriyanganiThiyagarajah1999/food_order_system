import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {
  Quotedata : any;
  userData: any[]=[];
  loginForm: FormGroup;
  password: any;
  userName: any;
  validationError: boolean = false;

  constructor(
    private fb : FormBuilder,
    private router : Router
  ){
    this.loginForm = this.fb.group({
      userName:['', [Validators.required]],
      password:['', [Validators.required]],
    })
  }

  ngOnInit(){
    if(this.Quotedata == undefined){
      this.Quotedata = localStorage.getItem('Quotedata');
      this.Quotedata = JSON.parse(this.Quotedata);
    }
    
    console.log(this.Quotedata);
    
  }

  login(){
    this.Quotedata.forEach((entry: { 'userName': any, 'confirmPassword':any  }) => {
      if(this.userName == entry['userName'] && this.password == entry['confirmPassword']){
        console.log(entry['userName'], " ",entry['confirmPassword']);
        this.validationError= false;

        this.userData.push(entry['userName']);
        localStorage.setItem('Userdata', JSON.stringify(this.userData));
        this.router.navigate(['/home']);
      }
      else{
        this.validationError= true;
      }
    });
    
  }
}
