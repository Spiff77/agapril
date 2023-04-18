import {Component, EventEmitter, HostListener, Input, Output} from '@angular/core';
import {Product} from '../model/product.model';

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

  product: Product|undefined= undefined

  @HostListener('click')
  selectItem(){
    console.log(this.productName)
  }

  sendValue() {
    this.out.emit("Hello "+this.productName?.length)
  }
}
