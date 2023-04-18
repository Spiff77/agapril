import { Component } from '@angular/core';

@Component({
  selector: 'app-total',
  templateUrl: './total.component.html',
  styleUrls: ['./total.component.scss']
})
export class TotalComponent {

  totalCount = 0;

  receiveValueFromCountElem(value: number) {
    this.totalCount += value
  }
}
