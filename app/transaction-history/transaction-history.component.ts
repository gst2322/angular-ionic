import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transaction-history',
  templateUrl: './transaction-history.component.html',
  styleUrls: ['./transaction-history.component.scss']
})
export class TransactionHistoryComponent implements OnInit {




  payment={
    select:'option1',
    select1:'option2',
    select2:'option3',
    select3:'option4'
  }
 property2= {
    select4:'option1',
    select5:'option1',
    select6:'option1',
    select7:'option1'
  }
  property3= {
    select4:'option1',
    select5:'option1',
    select6:'option1',
    select7:'option1'
  }
  property4= {
    select4:'option1',
    select5:'option1',
    select6:'option1',
    select7:'option1'
  }

  

  constructor() { }

  ngOnInit() {
  }

}
