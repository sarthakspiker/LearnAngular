import { Component } from '@angular/core';
import {FetchUsersService} from '../services/fetch-users.service';
import {FilterPipe} from '../filter.pipe'

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent {
  usersList:any= [];
  errorMsg:any;
  searchText:string='';
  constructor(private usersService:FetchUsersService) {  
    this.usersService.getUsersList().subscribe(
    result => this.usersList = result,
    error => this.errorMsg = error )
  }
  sortUsers(sortBy:string, rev:boolean){
    this.usersList = (this.usersList).sort((a:any,b:any)=>{
      if(a[sortBy]>b[sortBy]){
        return rev?1:-1;
      }
      if(a[sortBy]<b[sortBy]){
        return rev?-1:1;
      }
      return 0;
    })
  }

}

