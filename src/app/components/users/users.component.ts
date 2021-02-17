import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/models/user';

import { UserService } from '../../services/user/user.service'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  constructor(public userService: UserService) { }
  users: User[] = [];
  isActive: number
  ngOnInit(): void {
    //get all users
    this.userService.getUsers()
      .then((data) => {
        this.users = data;
      });
  }
  OnActive(id: number) {
    this.isActive=id;
  }

}
