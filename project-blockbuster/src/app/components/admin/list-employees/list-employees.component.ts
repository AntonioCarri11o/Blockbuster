import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Employee } from 'src/app/modules/types/employe';
import {EmployeeService} from 'src/app/services/employee.service'
import { NewemployeeformComponent } from '../newemployeeform/newemployeeform.component';
import { UpdateemployeeformComponent } from '../updateemployeeform/updateemployeeform.component';

let employees:Employee[];
@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {
  displayedColumns:string[]=['name','email','username','age','phone_number','roles','password','actions']
  dataSource=new MatTableDataSource(employees);
  constructor(private employeeService:EmployeeService, public dialog:MatDialog){}
  ngOnInit(): void {
    localStorage.setItem('activePath','employees');
    this.employeeService.getEmployees().subscribe(response=>{this.dataSource=response,console.log(response)})
  }
  addEmployee(){
    const dialogRef=this.dialog.open(NewemployeeformComponent,{width:"35%"});
  }
  updateEmployee(employee:Employee){
    const dialogRef=this.dialog.open(UpdateemployeeformComponent,{data:employee, width:"35%"})
  }
  deleteEmployee(id:string){
    this.employeeService.deleteEmployee(id).subscribe(response=>{console.log(response)});
    window.location.reload();
  }
  changePasswrod(){
    
  }
}
