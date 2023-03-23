import { Component,OnInit,Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Employee } from 'src/app/modules/types/employe';
import { EmployeeService } from 'src/app/services/employee.service';

let password:string;
let id:string;
@Component({
  selector: 'app-set-password',
  templateUrl: './set-password.component.html',
  styleUrls: ['./set-password.component.css']
})
export class SetPasswordComponent implements OnInit {

  password:string="";
  constructor(public dialogRef:MatDialogRef<SetPasswordComponent>,@Inject(MAT_DIALOG_DATA)public employee:Employee, private employeeService:EmployeeService) { }
  
  ngOnInit(): void {
  }
  close(){
    this.dialogRef.close();
  }
  submit(){
    this.employee.password=this.password;
    console.log(this.employee);
    this.employeeService.changePassword(this.employee._id,this.employee.password).subscribe(response=>{console.log(response)});
  }

}
