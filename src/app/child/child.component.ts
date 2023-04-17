import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {

  @Input()
  productName: string | undefined;

  @Output()
  out = new EventEmitter<string>();


  sendValue() {
    this.out.emit("Hello "+this.productName?.length)
  }
}
