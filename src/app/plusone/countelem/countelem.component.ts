import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-countelem',
  templateUrl: './countelem.component.html',
  styleUrls: ['./countelem.component.scss']
})
export class CountelemComponent {

  @Output()
  out = new EventEmitter<number>()

  @Input()
  count = 0

  sendValue(val: number){
    this.out.emit(val)
    this.count += val
  }

}
