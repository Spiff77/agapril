import {Component, HostListener, OnInit} from '@angular/core';
import { Product } from './model/product.model';
import {concat, concatMap, delay, filter, interval, map, mergeAll, mergeMap, Observable, of, timeout} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {UserService} from './user.service';
import {User} from './model/user.model';
import {logMessages} from '@angular-devkit/build-angular/src/builders/browser-esbuild/esbuild';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Mon premier projet angular';
  color = 'red'

  product: Product = {
    id: 1,
    name: 'Frank Zappa',
    category: 'Album',
    active: true,
    description: 'Un cd qu\'il est bien pour l\'écouter',
    price: 10,
    promo: .2
  }


  setDefaultColor(event: Event) {
    this.color = (event.target as HTMLSelectElement).value
  }

}
