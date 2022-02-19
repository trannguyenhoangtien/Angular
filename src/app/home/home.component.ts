import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public name = 'Tien';
  public age = 15;
  public traiCay = ['Táo', 'Nho', 'Cam'];
  public traiCay2 = [
    {name: 'Apple', price: 100, onSale: true},
    {name: 'Grape', price: 120, onSale: false},
    {name: 'Orange', price: -50, onSale: true}
  ]

  constructor() { }

  public ngOnInit(): void {
    console.log('trai cay: ', this.traiCay);
  }

  public resetName() : void{
    console.log('resetName');
    this.name = '';
  }
}
