import { Component } from '@angular/core';
import { GeneralService } from 'src/app/services/general.service';
import { GetTokenService } from 'src/app/services/get-token-service.service';
import { AuthService } from '../../service/auth.service';
import { LoginStateService } from 'src/app/services/login-state.service';
import { UserLogin } from 'src/app/modules/types/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
  user:UserLogin={
    email:'',
    password:''
  };

  get isLoading(){
    return this.AuthService.isLoading;
  }
  constructor(private TokenService:GetTokenService,private AuthService:AuthService, private router:Router, private generalServices:GeneralService){
    console.log("pinche componente jala mierda")
    if(!!localStorage.getItem('token')){
      this.router.navigate(['']);
      if(!this.generalServices.isLogged) {
        this.router.navigateByUrl('/');
      }
    }
  }

  get session(){
    return this.generalServices.token;
  }
  signin(){
    this.AuthService.signin(this.user);
    this.generalServices.isLogged=true;
    this.router.navigate(['/admin']);
  }
}
