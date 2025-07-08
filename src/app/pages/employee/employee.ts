import { Component, effect, inject, signal } from '@angular/core';
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
export class Employee {
  employeeService = inject(EmployeeService);
  empList = signal<IEmployeeList[]>([]);

  constructor() {
    effect(() => {
      this.employeeService.getAllEmployees().subscribe({
        next: (res: IResponseModel) => this.empList.set(res.data),
        error: (err) => alert('Failed to load employees: ' + err.message)
      });
    });
  }
}

