//SERVICIO DE INICIO DE SESIÓN
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError } from 'rxjs';
import { APP_URL } from 'src/app/services/base-url';
import { GeneralService } from 'src/app/services/general.service';
import { LoginStateService } from 'src/app/services/login-state.service';
import { UserLogin } from '../../types/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loading: boolean = false;

  get isLoading(){
    return this.loading;
  }

  constructor (private readonly http: HttpClient, private router: Router,private loginState:LoginStateService, private generalServices:GeneralService){}

  signin(payload: UserLogin){
    this.loading = true;
    this.http.post<any>(`${APP_URL}api/signin`, payload,{
      headers: {"Content-Type": "application/json"},
    })
      .pipe(
        catchError((error)=>{
          this.loading= false;
          return error;
        })
      )
      .subscribe((response) =>{
        localStorage.setItem("token", response.token);
        localStorage.setItem("role",response.role);
        console.log(response.token);
        localStorage.setItem("user",payload.email);
        if(response.role==="admin"){
          localStorage.setItem("role","admin")
        }else{
          localStorage.setItem("role","employee")
        }
        this.loading = false;
        this.loginState.setIsLogged = true;
        if(localStorage.getItem("role")==="admin"){
          this.router.navigateByUrl("/admin/home");
        }if(localStorage.getItem("role")==="employee"){
          this.router.navigateByUrl("/employee/home")
        }
        
      });
  }
}
