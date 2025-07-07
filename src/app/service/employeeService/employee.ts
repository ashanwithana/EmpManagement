import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IResponseModel } from '../../model/response.model';
import { UserModel } from '../../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class Employee {

  constructor(private http: HttpClient) { }

  onLogin(obj: UserModel): Observable<IResponseModel> {
    return this.http.post<IResponseModel>('https://freeapi.miniprojectideas.com/api/EmployeeLeave/Login', obj)
  }
}
