import { Component } from '@angular/core';
import { GeneralService } from 'src/app/services/general.service';
import { Router } from '@angular/router';
import { LoginStateService } from 'src/app/services/login-state.service';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  opened=true;
constructor(private gereralServices:GeneralService,private router:Router,private loginStateService:LoginStateService){}
  signOut(){
    localStorage.setItem('token',' ');
    localStorage.setItem('activePath',' ');
    localStorage.setItem('role',' ');
    this.gereralServices.isLogged=false;
    this.loginStateService.setIsLogged=false;
    this.router.navigate(['/']);
  }
}
