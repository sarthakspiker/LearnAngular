import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { IEmployee } from '../models/iemployee';

@Injectable({
  providedIn: 'root'
})
export class ParseEmployeesJsonService {
  private url:string = 'assets/employeesData.json'
  //private url:string = 'https://jsonplaceholder.typicode.com/users/'
  constructor(private http:HttpClient) { }
  getEmployeesJson():Observable<IEmployee[]>{
    return this.http.get<IEmployee[]>(this.url)
  }
}
