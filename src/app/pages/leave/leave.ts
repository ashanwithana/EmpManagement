import { Component, effect, ElementRef, inject, signal, ViewChild } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { LeaveService } from '../../service/leave/leave-service';
import { Ileave } from '../../model/leave.model';
import { IResponseModel } from '../../model/response.model';
import { CommonModule, NgClass } from '@angular/common';

@Component({
  selector: 'app-leave',
  imports: [ReactiveFormsModule, CommonModule, NgClass],
  templateUrl: './leave.html',
  styleUrl: './leave.css'
})
export class Leave {

  @ViewChild('leaveModal') employeeModel!: ElementRef

  leaveService = inject(LeaveService)

  leaveList = signal<Ileave[]>([]);

  currentTabName: string = 'myLeaves'

  leaveForm: FormGroup = new FormGroup({
    leaveId: new FormControl(0),
    employeeId: new FormControl(0),
    fromDate: new FormControl(''),
    toDate: new FormControl(''),
    noOfDays: new FormControl(''),
    leaveType: new FormControl(''),
    details: new FormControl(''),
    isApproved: new FormControl(false),
    approvedDate: new FormControl(null)

  })

  constructor() {
    const userData = localStorage.getItem('employee');
    if (userData != null) {
      const empData = JSON.parse(userData);
      this.leaveForm.controls['employeeId'].setValue(empData.employeeId);
    }
    effect(() => {
      this.leaveService.getLeavebyEmployeeId(this.leaveForm.controls['employeeId'].value).subscribe({
        next: (res: IResponseModel) => this.leaveList.set(res.data),
        error: (err) => alert('This service is currently unavailable. Please try again later.')
      });
    })
  }

  changeTab(tabName: string) {
    this.currentTabName = tabName
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

  submitLeave() {
    const leaveData = this.leaveForm.value;
    this.leaveService.addleave(leaveData).subscribe({
      next: () => {
        alert('Leave request submitted successfully');
        this.closeModal();
        this.leaveForm.reset();
      },
      error: (err) => {
        alert('This service is currently unavailable. Please try again later.');
      },
    })
  }
}
