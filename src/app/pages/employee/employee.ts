import { Component, inject, OnInit } from '@angular/core';
import { EmployeeService } from '../../service/employeeService/employee';
import { IResponseModel } from '../../model/response.model';
import { IEmployeeList } from '../../model/employee.model';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-employee',
  imports: [CommonModule],
  templateUrl: './employee.html',
  styleUrl: './employee.css'
})
export class Employee implements OnInit {

  employeeSerivce = inject(EmployeeService)

  empList: IEmployeeList[] = []

  ngOnInit(): void {
    this.getEmployees();
  }

  getEmployees() {
    this.employeeSerivce.getAllEmployees().subscribe({
      next: (res: IResponseModel) => {
        console.log('Employee list:', res.data);
        this.empList = res.data;
      },
      error: (err) => {
        alert('Failed to load employees: ' + err.message);
      }
    });
  }

}
