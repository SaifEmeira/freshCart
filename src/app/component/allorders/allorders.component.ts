import { Component, OnInit } from '@angular/core';
import { ApidataService } from 'src/app/service/apidata.service';

@Component({
  selector: 'app-allorders',
  templateUrl: './allorders.component.html',
  styleUrls: ['./allorders.component.scss']
})
export class AllordersComponent implements OnInit {

  constructor(private _ApidataService:ApidataService){}

  userId:string="";


  ngOnInit(): void {
    this._ApidataService.getAllOrders().subscribe({
      next:(response)=>{

        console.log(response);
        

 

        

        
        
      }
    })
  }



}
