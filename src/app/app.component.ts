import {Component, HostListener, OnInit} from '@angular/core';
import { Product } from './model/product.model';
import {delay, filter, interval, map, Observable, of, timeout} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {UserService} from './user.service';
import {User} from './model/user.model';
import {logMessages} from '@angular-devkit/build-angular/src/builders/browser-esbuild/esbuild';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Mon premier projet angular';
  color = 'red'

  product: Product = {
    id : 1,
    name: 'Frank Zappa',
    category : 'Album',
    active: true,
    description: 'Un cd qu\'il est bien pour l\'écouter',
    price: 10,
    promo: .2
  }

  users!: User[];

  count = 1;

  constructor(private us: UserService) {}

  setDefaultColor(event: Event) {
   this.color = (event.target as HTMLSelectElement).value
  }

  ngOnInit(): void {
    this.us.findAll().pipe(
      delay(2500)
    ).subscribe( v => this.users = v)
  }

}
