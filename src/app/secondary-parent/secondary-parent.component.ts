import {Component, OnInit} from '@angular/core';
import {Product} from '../model/product.model';

@Component({
  selector: 'app-secondary-parent',
  templateUrl: './secondary-parent.component.html',
  styleUrls: ['./secondary-parent.component.scss']
})
export class SecondaryParentComponent{
  productName1 = "Trotinette"
  productName2 = "TV"

  product: Product = {
    id : 2,
    name: 'Raoul petite',
    category : 'Album',
    active: true,
    description: 'Un cd qu\'il est bien pour l\'écouter',
    price: 12,
    promo: .1
  }

  constructor() {
  }


  getValueFromChild(value :string){
    this.productName1 = "Test";
    console.log("Received value from children: " + value)
  }

}
