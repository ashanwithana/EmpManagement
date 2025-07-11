import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IResponseModel } from '../../model/response.model';
import { Observable } from 'rxjs';
import { LeaveModel } from '../../model/leave.model';

@Injectable({
  providedIn: 'root'
})
export class LeaveService {

  constructor(private http: HttpClient) { }

  addleave(obj: LeaveModel): Observable<IResponseModel> {
    return this.http.post<IResponseModel>('https://freeapi.miniprojectideas.com/api/EmployeeLeave/AddLeave', obj)
  }

  getLeavebyEmployeeId(employeeId: number): Observable<IResponseModel> {
    return this.http.get<IResponseModel>('https://freeapi.miniprojectideas.com/api/EmployeeLeave/GetAllLeavesByEmployeeId?id=' + employeeId)
  }

  getLeavesForApprovedBySupervisor(employeeId: number): Observable<IResponseModel> {
    return this.http.get<IResponseModel>('https://freeapi.miniprojectideas.com/api/EmployeeLeave/GetLeavesForApprovalBySuperwiserId?id=' + employeeId);
  }
}
