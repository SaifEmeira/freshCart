import { Component, ElementRef, HostListener, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-navbar-blanck',
  templateUrl: './navbar-blanck.component.html',
  styleUrls: ['./navbar-blanck.component.scss']
})
export class NavbarBlanckComponent implements OnInit {

  constructor(private _Router:Router , private _AuthService:AuthService , private _CartService:CartService , private _Renderer2:Renderer2){}

// @ViewChild('nav') navElement!:ElementRef;

// @HostListener('window:scroll')
// onScroll(){
//   if (window.scrollY>400) {
// this._Renderer2.addClass(this.navElement.nativeElement,'')
    
//   }else{
// this._Renderer2.removeClass(this.navElement.nativeElement,'')

//   }

  
// }


  cartNumber:number=0;

  ngOnInit(): void {
    this._CartService.cartCount.subscribe({
      next:(data)=>{
        this.cartNumber=data
      }
    });


    this._CartService.getCart().subscribe({
      next:(data)=>{
        console.log(data);
        this._CartService.cartCount.next(data.numOfCartItems)
        
      }
    })
  }


  removeToken(){
    localStorage.removeItem("userToken");
    this._Router.navigate(['/login'])

  }


  userName=this._AuthService?.userName?.name;



}
