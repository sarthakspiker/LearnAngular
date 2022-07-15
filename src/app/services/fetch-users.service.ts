import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUsers } from '../models/i-users';

@Injectable({
  providedIn: 'root'
})
export class FetchUsersService {
private url:string = 'https://jsonplaceholder.typicode.com/users/'
constructor(private http:HttpClient) { }
getUsersList():Observable<IUsers>{
  return this.http.get<IUsers>(this.url)
}
}
