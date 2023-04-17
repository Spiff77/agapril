import { Component } from '@angular/core';

@Component({
  selector: 'app-secondary-parent',
  templateUrl: './secondary-parent.component.html',
  styleUrls: ['./secondary-parent.component.scss']
})
export class SecondaryParentComponent {
  productName1 = "Trotinette"
  productName2 = "TV"

  getValueFromChild(value :string){
    console.log("Received value from children: " + value)
  }
}
