import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent {

  constructor(private _FormBuilder: FormBuilder, private _CartService: CartService, private _ActivatedRoute: ActivatedRoute, private _Router: Router) { }

  onlinePaymentForm: FormGroup = this._FormBuilder.group({
    details: [""],
    phone: [""],
    city: [""]
  })

  cartId: any;

  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe({
      next: (params) => {
        console.log(params.get('id'));
        this.cartId = params.get('id');


      }
    }






    )
  }






  handlePayment() {

    const cartDetails = this.onlinePaymentForm.value


    this._CartService.checkOut(this.cartId, cartDetails).subscribe({
      next: (response) => {
        response.session.success_url = "http://localhost:4200/home"
        console.log(response);

        window.open(response.session.url)

      }
    })
    console.log(this.onlinePaymentForm.value);

  }


  checkOut(): void {

  }



}
