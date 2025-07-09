export interface Ileave {
    leaveId: number
    employeeId: number
    fromDate: string
    toDate: string
    noOfDays: number
    leaveType: string
    details: string
    isApproved: boolean
    approvedDate: string
}

export class LeaveModel {
    leaveId: number
    employeeId: number
    fromDate: string
    toDate: string
    noOfDays: number
    leaveType: string
    details: string
    isApproved: boolean
    approvedDate: string

    constructor() {
        this.leaveId = 0
        this.employeeId = 0
        this.fromDate = ''
        this.toDate = ''
        this.noOfDays = 0
        this.leaveType = ''
        this.details = ''
        this.isApproved = false
        this.approvedDate = ''
    }
}
