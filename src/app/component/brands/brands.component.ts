import { Component } from '@angular/core';
import { ApidataService } from 'src/app/service/apidata.service';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.scss']
})
export class BrandsComponent {

  constructor(private _ApidataService: ApidataService) { }

  brandArr:any[]=[];

  isLoading:boolean=false 


  ngOnInit(): void {

    this.isLoading=true
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this._ApidataService.getBrands().subscribe({
      next: (response) => {

        this.brandArr=response.data
          
        console.log(response.data);


        this.isLoading=false
          
        }
        // console.log(response.data[2]);

      
    })
  

  }}
