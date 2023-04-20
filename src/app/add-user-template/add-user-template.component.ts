import { Component } from '@angular/core';
import {User} from '../model/user.model';
import {FormGroup, NgForm} from '@angular/forms';

@Component({
  selector: 'app-add-user-template',
  templateUrl: './add-user-template.component.html',
  styleUrls: ['./add-user-template.component.scss']
})
export class AddUserTemplateComponent {

  submitted = false;

  user: User = {
    id: 0,
    name:'',
    username:''
  }

  submit(form: NgForm) {
    this.submitted =true
    if(form.valid){
      console.log(this.user)
    }
  }
}
