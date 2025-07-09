import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-leave',
  imports: [],
  templateUrl: './leave.html',
  styleUrl: './leave.css'
})
export class Leave {

  @ViewChild('leaveModal') employeeModel!: ElementRef


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

  submitLeave(){

  }
}
