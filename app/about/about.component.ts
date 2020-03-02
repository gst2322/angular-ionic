import { Component, OnInit } from '@angular/core';

import { environment } from '@env/environment';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  version: string | null = environment.version;
  work = {
    companyName: 'Rentastico',
    position: 'Developer',
    place: 'Hyderabad, Telangana, India',
    dateFrom: 'Feb 4, 2020',
    dateTo: 'Feb 12, 2020'
  };

  constructor() {}

  ngOnInit() {}
}
