import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paymentmethod',
  templateUrl: './paymentmethod.component.html',
  styleUrls: ['./paymentmethod.component.scss']
})
export class PaymentmethodComponent implements OnInit {
  isPaymentMethod=true;
  isTransHis=false;
  isPayout=false;
  
  constructor() {}



  ngOnInit() {}
}
