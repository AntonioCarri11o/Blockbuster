import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GeneralService } from 'src/app/services/general.service';
import { LoginStateService } from 'src/app/services/login-state.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {
  opened=true;
  constructor(private gereralServices:GeneralService,private router:Router,private loginStateService:LoginStateService){
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
