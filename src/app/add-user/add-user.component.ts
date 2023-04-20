import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
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
  formSubmitted = false;

  constructor(private us: UserService, private router: Router, private fb: FormBuilder) {
  }

  ngOnInit(): void {
    new FormControl()
    this.myform = this.fb.group({
      name:['', [Validators.required, Validators.minLength(3)]],
      username: [''],
      address: this.fb.group({
        name:[''],
        street: [''],
        city: ['']
      })
    })
  }


  submit() {
    this.formSubmitted = true;
    if(this.myform.valid){
      console.log(this.myform.value)
      this.us.add(this.myform.value).subscribe(v=> {
        console.log(v)
        this.router.navigateByUrl("/home")
      })
    }
  }
}
