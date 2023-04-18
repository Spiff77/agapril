import {Component, EventEmitter, HostListener, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {Product} from '../model/product.model';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit{

  @Input()
  productName: string | undefined;

  @Output()
  out = new EventEmitter<string>();

  ngOnInit(): void {
    console.log(this.productName)
  }

  product: Product|undefined= undefined

  @HostListener('click')
  selectItem(){
    console.log(this.productName)
  }

  sendValue() {
    this.out.emit("Hello "+this.productName?.length)
  }




}
