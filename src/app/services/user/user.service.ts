import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

//models
import {User} from '../../shared/models/user'
// services
import { ApiService } from '../api/api.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  constructor(private apiService: ApiService) { }

  users: BehaviorSubject<any> = new BehaviorSubject<any>({});
  async getUsers(): Promise<User[]> {
    const data: Array<User> = await this.apiService.getUsers();
    if (data) {
      this.users.next(data);
    return data;
      } else {
        console.log(' data null');
      }
    }
  }

