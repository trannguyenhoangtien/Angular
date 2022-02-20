import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public name = 'Tien';
  public age = 15;
  public traiCay = ['Táo', 'Nho', 'Cam'];
  public traiCay2 = [
    { name: 'Apple', price: 100, onSale: true },
    { name: 'Grape', price: 120, onSale: false },
    { name: 'Orange', price: -50, onSale: true },
  ];

  public districts: string[] = [];
  public cities = [
    { name: 'Select City', district: ['Quận Huyện'] },
    {
      name: 'An Giang',
      districts: [
        'Thành phố Long Xuyên',
        'Thành phố Châu Đốc',
        'Thị xã Tân Châu',
        'Huyện An Phú',
        'Huyện Châu Phú',
        'Huyện Tri Tôn',
      ],
    },
    {
      name: 'Kiên Giang',
      districts: [
        'Thành phố Rạch Giá',
        'Thành phố Phú Quốc',
        'Thị xã Tân Châu',
        'Huyện An Phú',
        'Huyện Châu Phú',
        'Huyện Tri Tôn',
      ],
    },
  ];

  constructor() {}

  public ngOnInit(): void {
    console.log('cities: ', this.cities);
  }

  public resetName(): void {
    console.log('resetName');
    this.name = '';
  }

  public changeCity(event: any): void {
    const city = event.target.value;

    //option 1:
    // console.log('event', event.target.value);
    // const search = this.cities.filter((c) => c.name === city);
    // console.log('search', search);
    // if (search && search.length > 0) {
    //   this.districts = search[0].districts as string[];
    //   console.log('districts', this.districts);
    // }

    //option 2:
    this.districts = this.cities.find((c) => c.name === city)?.districts || [];
  }
}
