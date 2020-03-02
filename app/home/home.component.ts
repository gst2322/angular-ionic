import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';

import { QuoteService } from './quote.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  quote: string | undefined;
  isLoading = false;
  profile = {
    Name: 'Mr.Saiteja govoor ',
    Address: 'Madhapur,Hyderabad',
    ReviewCount: 0,
    ReviewAvg: 0,
    email: 'saiteja@gmail.com',
    location: 'Llanquihue Province, Chile',
    Gender: 'Male',
    Language: 'Telugu,English',
    PhoneNumber: '+919573017295',
    Timezone: 'AMERICA/SANTIAGO',
    GovtId: '842343943234',
    DrivingLic: 'D2C5 94CC 25L9 23A9',
    PassportNum: '25L9 D2C5 2354 254',
    profileImage: 'https://cdn3.iconfinder.com/data/icons/avatars-round-flat/33/avat-01-512.png'
  };

  constructor(private quoteService: QuoteService) {}

  ngOnInit() {
    this.isLoading = true;
    this.quoteService
      .getRandomQuote({ category: 'dev' })
      .pipe(
        finalize(() => {
          this.isLoading = false;
        })
      )
      .subscribe((quote: string) => {
        this.quote = quote;
      });
  }
}
