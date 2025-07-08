export class EmployeeModel {
    employeeId: number
    employeeName: string
    contactNo: string
    emailId: string
    deptId: string
    password: string
    gender: string
    role: string

    constructor() {
        this.employeeId = 0
        this.employeeName = ''
        this.contactNo = ''
        this.emailId = ''
        this.deptId = ''
        this.password = ''
        this.gender = ''
        this.role = ''
    }
}


export interface IEmployee {
    employeeId: number
    employeeName: string
    contactNo: string
    emailId: string
    deptId: number
    password: string
    gender: string
    role: string
}

export interface IEmployeeList {
    employeeId: number
    employeeName: string
    deptId: number
    deptName: string
    contactNo: string
    emailId: string
    role: string
}