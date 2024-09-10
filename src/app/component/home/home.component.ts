import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ToastrService } from 'ngx-toastr';
import { Category } from 'src/app/categories-interface';
import { ApidataService } from 'src/app/service/apidata.service';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private _ApidataService:ApidataService , private _CartService:CartService , private _ToastrService:ToastrService){}

  productsData:any[]=[];
  categoriesArr:Category[]=[];

  shop:string="";

  isLoading:boolean=false 

  addMsg:string='';

  responseStatus:string='';


  searchTerm:string='';

  




  

ngOnInit(): void {

  

  this.isLoading=true

  this._ApidataService.getData().subscribe({
    next:(response)=>{
      this.isLoading=false;
      console.log(response.data);
      this.productsData=response.data
      
    }
  });

  


  this._ApidataService.getCategories().subscribe({
    next:(categories)=>{
      console.log( categories.data);
      this.categoriesArr=categories.data;

      this.shop="Shop Popular Categories"
      

    }
  });



  
  
}



addProduct(id:string):void{
  this._CartService.postcart(id).subscribe({
    next:(response)=>{

      console.log(response);
      this.responseStatus=response.status;

      this._ToastrService.success(response.message);

      this._CartService.cartCount.next(response.numOfCartItems)

      console.log("hamda", response.numOfCartItems);
      

    
      
      // this.addMsg=response.message;
        
      
      
    }
  })
}


catslider: OwlOptions = {
  loop: true,
  mouseDrag: true,
  touchDrag: true,
  pullDrag: false,
  dots: false,
  navSpeed: 700,
  navText: ['prev', 'next'],
  autoplay:true,
  responsive: {
    0: {
      items: 1
    },
    400: {
      items: 2
    },
    740: {
      items: 3
    },
    940: {
      items: 4
    }
  },
  nav: true
}


mainSlider: OwlOptions = {
  loop: true,
  mouseDrag: true,
  touchDrag: true,
  pullDrag: false,
  dots: false,
  navSpeed: 700,
  navText: ['prev', 'next'],
  items:1,
  autoplay:true,
  nav: false
}

}
