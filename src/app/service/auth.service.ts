import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _HttpClient:HttpClient) { }

  registerForm(userData:object):Observable<any>{
   return this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/auth/signup`,userData)
  }


  loginForm(userLogin:object):Observable<any>{
    return this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/auth/signin`,userLogin)
  }


  userName:any;


  saveUser(){
const encode = localStorage.getItem("userToken");

if (encode) {
  const decode = jwtDecode(encode)
  // console.log(decode);

  this.userName=decode;

  console.log(this.userName);
  
  
}
  }
} 
 