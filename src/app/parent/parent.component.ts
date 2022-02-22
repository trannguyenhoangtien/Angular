import { Component, OnInit, ViewChild } from '@angular/core';
import { ChildrenComponent } from '../children/children.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
})
export class ParentComponent implements OnInit {
  public parentMsg = '';
  @ViewChild('thangTeo') thangTeo: ChildrenComponent | undefined;
  @ViewChild('thangTy') thangTy: ChildrenComponent | undefined;
  constructor() {}

  ngOnInit(): void {}

  public helloChildren(name: string) {
    this.parentMsg = 'Hello ' + name;
  }

  public giveMoney() {
    this.thangTeo?.giveMoney(10);
    this.thangTy?.giveMoney(25);
  }
}
