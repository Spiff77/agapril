import { Component } from '@angular/core';
import { Product } from '../model/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Mon premier projet angular';

  product: Product = {
    id : 1,
    name: 'Frank Zappa',
    category : 'Album',
    active: true,
    description: 'Un cd qu\'il est bien pour l\'écouter',
    price: 10,
    promo: .2
  }

}
