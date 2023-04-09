import { Component,OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { GeneralService } from 'src/app/services/general.service';
import { LoginStateService } from 'src/app/services/login-state.service';
import { NewsaleformComponent } from '../screens/newsaleform/newsaleform.component';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {
  opened=true;
  constructor(private gereralServices:GeneralService,private router:Router,private loginStateService:LoginStateService,public dialog:MatDialog){
  }
  newSale(){
    const dialogRef=this.dialog.open(NewsaleformComponent,{width:"35%"});
  }
  signOut(){
    localStorage.setItem('token',' ');
    localStorage.setItem('activePath',' ');
    localStorage.setItem('role',' ');
    this.gereralServices.isLogged=false;
    this.loginStateService.setIsLogged=false;
    this.router.navigate(['/']);
  }
}
