import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {


  constructor(private _AuthService:AuthService , private _Router:Router){}


  isLoading:boolean=false

  


  msgError:string="";
  


  handleLogin():void{

    this.isLoading=true;
if (this.loginForm.valid) {
  this._AuthService.loginForm(this.loginForm.value).subscribe({
    next:(data)=>{
        console.log(data);

        console.log(data.token);
        localStorage.setItem('userToken',data.token);
        this._AuthService.saveUser();
        

        if (data.message==="success") {

          this._Router.navigate(['/home']);


          
        }

    this.isLoading=false;

        
    },
    error:(err)=>{
      this.isLoading=false;

      this.msgError=err.error.message;

      console.log(err.error.message);
      

    }

  })
}
   
    
  }

  loginForm:FormGroup=new FormGroup({
    email:new FormControl('',[Validators.required]),
    password:new FormControl('',[Validators.required])

  })

}
