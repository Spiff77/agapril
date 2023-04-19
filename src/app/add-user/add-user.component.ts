import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {NameService} from '../name.service';
import {User} from '../model/user.model';
import {UserService} from '../user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit{

  myform!: FormGroup;

  constructor(private us: UserService, private router: Router) {
  }

  ngOnInit(): void {
    this.myform = new FormGroup<any>({
      name: new FormControl(''),
      username: new FormControl('')
    })
  }


  submit() {
    console.log(this.myform.value)
    this.us.add(this.myform.value).subscribe(v=> {
      console.log(v)
      this.router.navigateByUrl("/home")
    })
  }
}
