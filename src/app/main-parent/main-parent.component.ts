import {Component, HostListener, OnInit} from '@angular/core';
import {NameService} from '../name.service';

@Component({
  selector: 'app-main-parent',
  templateUrl: './main-parent.component.html',
  styleUrls: ['./main-parent.component.scss']
})
export class MainParentComponent implements OnInit{

  names: string[] = []

  constructor(public ns: NameService) {
  }

  ngOnInit(): void {
    this.names = this.ns.names
  }

  @HostListener('click')
  addToServiceName(){
    this.ns.names.push('Claire')
  }

}
