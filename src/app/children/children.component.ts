import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-children',
  templateUrl: './children.component.html',
  styleUrls: ['./children.component.scss'],
})
export class ChildrenComponent implements OnInit {
  @Input() name: string = '';
  @Output() callFromChildrent: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  public callParent() {
    console.log('call parent');
    this.callFromChildrent.emit(this.name);
  }

  public giveMoney(amount: number) {
    console.log('I am ' + this.name + '. Thank Daddy gave me $' + amount);
  }
}
