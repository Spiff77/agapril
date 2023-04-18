import {Component, OnInit} from '@angular/core';
import {Product} from '../model/product.model';

@Component({
  selector: 'app-secondary-parent',
  templateUrl: './secondary-parent.component.html',
  styleUrls: ['./secondary-parent.component.scss']
})
export class SecondaryParentComponent{

  productNames: string[] = ['Trotinette', 'TV', 'Tabouret de bar', 'Pilier de comptoir']
  names: string[] = ['Anthony', 'Magali', 'Jéremy']

  present = true;

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
    this.present = false
    console.log('Received value from children: ' + value)
  }

}
