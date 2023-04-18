import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from './model/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url = 'https://jsonplaceholder.typicode.com/users';
  constructor(private http: HttpClient) { }

  findAll() : Observable<User[]>{
    return this.http.get<User[]>(this.url);
  }
}
