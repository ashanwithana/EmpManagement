import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { IResponseModel } from '../../model/response.model';
import { UserModel } from '../../model/user.model';
import { EmployeeModel } from '../../model/employee.model';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }

  onLogin(obj: UserModel): Observable<IResponseModel> {
    return this.http.post<IResponseModel>('https://freeapi.miniprojectideas.com/api/EmployeeLeave/Login', obj)
  }

  getAllEmployees(): Observable<IResponseModel> {
    return this.http.get<IResponseModel>('https://freeapi.miniprojectideas.com/api/EmployeeLeave/GetEmployees')
  }

  getDepartments(): Observable<IResponseModel> {
    return this.http.get<IResponseModel>('https://freeapi.miniprojectideas.com/api/EmployeeLeave/GetDepartments')
  }

  getRoles(): Observable<IResponseModel> {
    return this.http.get<IResponseModel>('https://freeapi.miniprojectideas.com/api/EmployeeLeave/GetAllRoles')
  }

  addEmployee(obj: EmployeeModel): Observable<IResponseModel> {
    return this.http.post<IResponseModel>('https://freeapi.miniprojectideas.com/api/EmployeeLeave/CreateEmployee', obj)
  }
}
