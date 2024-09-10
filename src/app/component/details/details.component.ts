import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ToastrService } from 'ngx-toastr';
import { ApidataService } from 'src/app/service/apidata.service';
import { CartService } from 'src/app/service/cart.service';
import { __param } from 'tslib';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  constructor(private _ActivatedRoute:ActivatedRoute,private _ToastrService:ToastrService , private _ApidataService:ApidataService , private _CartService:CartService){}


  prodId:any;
  isLoading:boolean=false

  prodData:any= { } 
  


  ngOnInit(): void {

    this.isLoading=true;
    this._ActivatedRoute.paramMap.subscribe({
      next:(params)=>{
        console.log(params.get('id'));
        this.prodId=params.get('id');
        

      }


      
    });
    this._ApidataService.getSpecificData(this.prodId).subscribe({
      next:(data)=>{
        this.isLoading=false
        console.log(data);

        this.prodData=data.data;
        

      }
    })




    
  }


  addProduct(id:string):void{
    this._CartService.postcart(id).subscribe({
      next:(response)=>{
        console.log(id);
        this._CartService.cartCount.next(response.numOfCartItems)

      this._ToastrService.success(response.message);

       
        
      }
    })
  }
  

  prodSlider: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    navText: ['prev', 'next'],
    items:1,
    autoplay:true,
    nav: false
  }
  

  

  
}
