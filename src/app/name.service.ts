import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NameService {

  public names = ['Benjamin', 'Mohamed', 'Thibault']

  constructor() { }
}
