import {Component, Inject, OnInit} from '@angular/core';
import {NameService} from '../name.service';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

export interface DialogData{
  libelle: string,
  description: string
}

@Component({
  selector: 'app-person-dialog',
  templateUrl: './person-dialog.component.html',
  styleUrls: ['./person-dialog.component.scss']
})
export class PersonDialogComponent implements OnInit{

  names: string[] = []

  constructor(private ns: NameService,
              public dialogRef: MatDialogRef<PersonDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: DialogData) {
  }

  ngOnInit(): void {
    this.names = this.ns.names
  }

  selectUser(user: string){
    this.dialogRef.close(user)
  }

}
