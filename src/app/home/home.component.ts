import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {User} from '../model/user.model';
import {UserService} from '../user.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  users$!: Observable<User[]>;

  count = 1;

  currentId = -1

  constructor(private us: UserService, private activatedRoute: ActivatedRoute) {}
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(
      params => this.currentId  = Number(params.get('id'))
    )
    // const id = this.activatedRoute.snapshot.paramMap.get("id")
    //this.currentId = Number(id)
    this.users$ = this.us.findAll()
  }

}
