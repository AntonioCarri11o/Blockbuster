import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-newemployeeform',
  templateUrl: './newemployeeform.component.html',
  styleUrls: ['./newemployeeform.component.css']
})
export class NewemployeeformComponent implements OnInit{
  constructor(public dialog:MatDialogRef<NewemployeeformComponent>,private employeeService:EmployeeService,){}
  employee:any={
    name:"",
    lastname:"",
    email:"",
    username:"",
    password:"",
    age:0,
    phone_number:""
  }
  ngOnInit(): void {
    
  }
  close():void{
    this.dialog.close();
  }
  send(){
    this.employeeService.createEmployee(this.employee).subscribe(response=>{console.log(response)});
    this.dialog.close();
    window.location.reload();
  }
}
