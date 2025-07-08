import { Component, effect, ElementRef, inject, signal, ViewChild } from '@angular/core';
import { EmployeeService } from '../../service/employeeService/employee';
import { IResponseModel } from '../../model/response.model';
import { EmployeeModel, IEmployeeList } from '../../model/employee.model';
import { CommonModule } from '@angular/common';
import { IDepartment } from '../../model/department.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-employee',
  imports: [CommonModule, FormsModule],
  templateUrl: './employee.html',
  styleUrl: './employee.css'
})
export class Employee {
  employeeService = inject(EmployeeService);
  empList = signal<IEmployeeList[]>([]);

  departments = signal<IDepartment[]>([]);

  roleList = signal<any[]>([]);

  employeeObj: EmployeeModel = new EmployeeModel()

  @ViewChild('employeeModal') employeeModel!: ElementRef

  constructor() {
    effect(() => {
      this.employeeService.getAllEmployees().subscribe({
        next: (res: IResponseModel) => this.empList.set(res.data),
        error: (err) => alert('Failed to load employees: ' + err.message)
      });

      this.employeeService.getDepartments().subscribe({
        next: (res: IResponseModel) => this.departments.set(res.data),
        error: (err) => alert('Failed to load departments: ' + err.message)
      });
      this.employeeService.getRoles().subscribe({
        next: (res: IResponseModel) => this.roleList.set(res.data),
        error: (err) => alert('Failed to load roles: ' + err.message)
      });
    });
  }

  openModal() {
    if (this.employeeModel) {
      this.employeeModel.nativeElement.style.display = 'flex';
    }
  }

  closeModal() {
    if (this.employeeModel) {
      this.employeeModel.nativeElement.style.display = 'none'
    }
  }

  addEmployee() {
    this.employeeService.addEmployee(this.employeeObj).subscribe({
      next: (res: IResponseModel) => {
        if (res.result) {
          alert('Employee added successfully');
          this.closeModal();
        }else{
          alert('Failed to add employee: ' + res.message);
        }
      },
      error: (err) => {
        alert('Failed to add employee: ' + err.message);
      },
    })
  }
}

