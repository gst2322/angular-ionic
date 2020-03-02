import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-properties',
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.scss']
})
export class PropertiesComponent implements OnInit {
  property = [
    {
      title: 'hyderabad',
      subtitle: 'Temu SA',
      img: 'http://rentastico.com/media/properties/feature_10_5b29b375233b4_w851.jpg'
    },
    {
      title: 'Village in the big Apple',
      subtitle: 'New York, NY, USA',
      img: 'http://rentastico.com/media/properties/feature_11_5b29b49d83152_w851.jpg'
    },
    {
      title: 'Condo hotel Zone CancunCancún, ',
      subtitle: 'Quintana Roo, Mexico',
      img: 'http://rentastico.com/media/properties/feature_12_5b29b649b55c1_w851.jpg'
    },
    {
      title: 'Untitled Property ',
      subtitle: ' Madrid, Spain',
      img: 'http://rentastico.com/assets/img/default.png'
    },
    {
      title: 'Untitled Property ',
      subtitle: ' Madrid, Spain',
      img: 'http://rentastico.com/media/properties/feature_14_5b2a460793681_w851.jpg'
    },
    {
      title: 'My Nest Inn Paris Mouffetard ',
      subtitle: ' Paris, France',
      img: 'http://rentastico.com/media/properties/feature_18_5b3b88eda32d7_w851.jpg'
    },
    {
      title: 'Hollywood Spring Deluxe ',
      subtitle: '  Los Angeles, CA, USA',
      img: 'http://rentastico.com/media/properties/feature_19_5b3b8d9961186_w851.jpg'
    },
    {
      title: 'Olive Service Apartments Saket ',
      subtitle: '     New Delhi, Delhi, India',
      img: 'http://rentastico.com/media/properties/feature_20_5b3b93253e7e6_w851.jpg'
    },
    {
      title: 'Untitled Property ',
      subtitle: '  Madrid, Spain  ',
      img: 'http://rentastico.com/media/properties/feature_21_5b3ba39df32af_w851.jpg'
    },
    {
      title: 'My Nest Inn Paris Mouffetard   ',
      subtitle: '   Paris, France  ',
      img: 'http://rentastico.com/assets/img/default.png'
    },
    {
      title: 'Hollywood Spring Deluxe ',
      subtitle: '    Los Angeles, CA, USA',
      img: 'http://rentastico.com/assets/img/default.png'
    },
    {
      title: 'Olive Service Apartments Saket ',
      subtitle: '     New Delhi, Delhi, India ',
      img: 'http://rentastico.com/media/properties/feature_29_5e43ea7d8729f_w851.jpg'
    },
    {
      title: 'Olive Ser jknsvice Apartments Saket ',
      subtitle: '     New ccDelhi, Delhi, India ',
      img: 'http://rentastico.com/media/properties/feature_29_5e43ea7d8729f_w851.jpg'
    }
  ];

  constructor() {}

  ngOnInit() {}
}
