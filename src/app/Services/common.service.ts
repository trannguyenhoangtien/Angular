import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  public counter = 2;
  constructor() {}

  public binhPhuong(n: number): number {
    return n * n;
  }

  public submitData(data: any): void {
    console.log('Send dat to server. Data = ', data);
  }
}
