import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-qr-code',
  templateUrl: './qr-code.component.html',
  styleUrls: ['./qr-code.component.scss'],
})
export class QrCodeComponent implements OnInit {
  public qrInfo = '';
  public width = 300;
  public name = '';
  public age = 0;
  public baseInfo = '';
  constructor(route: ActivatedRoute) {
    route.queryParams.subscribe((v) => {
      if (v && v['data']) {
        const data = v['data'];

        console.log('queryParams=', data);
        console.log('name', data['name']);
        console.log('age', data.age);

        const obj = JSON.parse(data);
        console.log('queryParams=', obj);
        console.log('name', obj.name);
        console.log('age', obj.age);
      }
    });
  }

  ngOnInit(): void {}

  public change(event: any): void {
    //console.log('event', event.target.value);
    this.qrInfo = event.target.value;
    this.baseInfo = event.target.value;
    this.combine();
  }

  public changeName(event: any): void {
    this.name = event.target.value;
    this.combine();
  }

  public changeAge(event: any): void {
    this.age = event.target.value;
    this.combine();
  }

  public combine(): void {
    const data = JSON.stringify({ name: this.name, age: this.age });
    this.qrInfo = this.baseInfo + '?data=' + data;
    console.log('qrInfo', this.qrInfo);
  }
}
