import {AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, OnInit} from '@angular/core';
import {Product} from '../model/product.model';
import {NameService} from '../name.service';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import {PersonDialogComponent} from '../person-dialog/person-dialog.component';

@Component({
  selector: 'app-secondary-parent',
  templateUrl: './secondary-parent.component.html',
  styleUrls: ['./secondary-parent.component.scss']
})
export class SecondaryParentComponent{
  productNames: string[] = ['Trotinette', 'TV', 'Tabouret de bar', 'Pilier de comptoir']
  names: string[] = []

  present = true;

  dialogRef!: MatDialogRef<PersonDialogComponent>;

  product: Product = {
    id : 2,
    name: 'Raoul petite',
    category : 'Album',
    active: true,
    description: 'Un cd qu\'il est bien pour l\'écouter',
    price: 12,
    promo: .1
  }

  constructor(public ns: NameService, private dialog: MatDialog) {}

  openModal(){
    this.dialogRef = this.dialog.open(PersonDialogComponent, {
      disableClose: true,
      data: {
        libelle: 'admin',
        description: 'Choose who will be the root user of the system'
      }
    })

    this.dialogRef.afterClosed().subscribe(v => console.log(v))
  }


}
