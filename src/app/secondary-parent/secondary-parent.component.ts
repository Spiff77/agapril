import {AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, OnInit} from '@angular/core';
import {Product} from '../model/product.model';
import {NameService} from '../name.service';

@Component({
  selector: 'app-secondary-parent',
  templateUrl: './secondary-parent.component.html',
  styleUrls: ['./secondary-parent.component.scss']
})
export class SecondaryParentComponent implements OnInit{
  productNames: string[] = ['Trotinette', 'TV', 'Tabouret de bar', 'Pilier de comptoir']
  names: string[] = []

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

  constructor(public ns: NameService) {}

  ngOnInit(): void {
    this.names = this.ns.names
  }



}
