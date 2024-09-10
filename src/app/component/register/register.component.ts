import { Component } from '@angular/core';
import { FormControl, FormControlOptions, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  constructor(private _AuthService:AuthService , private _Router:Router){}


  isLoading:boolean=false

  registerForm:FormGroup=new FormGroup({
    name:new FormControl('' , [Validators.required ,Validators.minLength(3),Validators.maxLength(20)]),
    email:new FormControl('', [Validators.required,Validators.email]),
    password:new FormControl('', [Validators.required , Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)]),
    rePassword:new FormControl('', ),
    phone:new FormControl('', [Validators.required , Validators.pattern(/^(?:\+20|0020)?(?:10|11|12|15)\d{8}$/)]),


  } ,  {validators:[this.confirmPaswword]} as FormControlOptions)


  confirmPaswword(  group:FormGroup):void{

    const password = group.get("password");
    const rePassword = group.get("rePassword");
    if (rePassword?.value==="") {
      rePassword.setErrors({required:true})
    }

    else if (password?.value!==rePassword?.value) {
      rePassword?.setErrors(  {   mismatch:true     }   )
    }


  }


  goLogin():void{
    this._Router.navigate(["/login"])
  }


  msgError:string="";
  


  handleRegister():void{

    this.isLoading=true;
if (this.registerForm.valid) {
  this._AuthService.registerForm(this.registerForm.value).subscribe({
    next:(data)=>{
        console.log(data);

        if (data.message==="success") {

          this._Router.navigate(['/login'])

          
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

}
