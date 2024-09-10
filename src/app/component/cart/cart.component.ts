import { Component, OnInit, Renderer2 } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  constructor(private _CartService:CartService , private _Renderer2:Renderer2){}

  isLoading:boolean=false 


  cartData:any={};


  ngOnInit(): void {

    

    this.isLoading=true
    this._CartService.getCart().subscribe({
      next:(cartdata)=>{
        this.isLoading=false
        console.log(cartdata.data);
        this._CartService.cartCount.next(cartdata.numOfCartItems)
        this.cartData=cartdata.data;
        
        
      }
    })
  }

  deleteProd(id:any){
    this.isLoading=true;
    this._CartService.deleteProd(id).subscribe({
      
      next:(response)=>{
        this.isLoading=false
        console.log(response);
        this._CartService.cartCount.next(response.numOfCartItems)
        this.cartData=response.data
        
      }
    })
  }

  changeCount(id:any,count:number , el1:HTMLButtonElement,el2:HTMLButtonElement){


    this._Renderer2.setAttribute(el1 , "disabled" , "true")
    this._Renderer2.setAttribute(el2 , "disabled" , "true")


    this._CartService.updateCart(id,count).subscribe({
      next:(response)=>{
        console.log(response);
        this._CartService.cartCount.next(response.numOfCartItems)
        this.cartData=response.data
        

      }
    })


  }

}
