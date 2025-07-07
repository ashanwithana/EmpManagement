import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserModel } from '../../model/user.model';
import { Employee } from '../../service/employeeService/employee';
import { Router } from '@angular/router';
import { IResponseModel } from '../../model/response.model';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

  loginObj: UserModel = new UserModel()

  employeeSerivce = inject(Employee)
  router = inject(Router)

  login() {
    this.employeeSerivce.onLogin(this.loginObj).subscribe({
      next: (res: IResponseModel) => {
        if (res.result) {
          localStorage.setItem('employeeId', JSON.stringify(res.data))
          this.router.navigateByUrl('/dashboard')
        }
        else {
          alert('Login Failed: ' + res.message);
        }
      },
      error: () => {
        alert('An error occurred during login. Please try again later.');
      }
    })
  }
}
