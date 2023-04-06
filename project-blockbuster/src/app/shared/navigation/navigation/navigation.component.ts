import { Component } from '@angular/core';
import { BreakpointObserver,Breakpoints } from "@angular/cdk/layout";
import { Router } from '@angular/router';
import { LoginStateService } from 'src/app/services/login-state.service';
import {Observable}from 'rxjs'
import {map,shareReplay}from 'rxjs/operators'
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  //styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {
  get session(){
    return this.loginStateService.isLogged;
  }
  get tokenRole(){

    return localStorage.getItem('role');
  }

  get tokenAd(){
    const token =localStorage.getItem('token');
    return localStorage.getItem('token');
  }
  isHandset$:Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map((result)=>result.matches),shareReplay()
);
  constructor(
    private breakpointObserver:BreakpointObserver,
    private router:Router,
    private loginStateService:LoginStateService
  ){
    console.log(localStorage.getItem('token'));
    console.log(localStorage.getItem('role'));
/*
    localStorage.setItem('token',"");
    localStorage.setItem('role',"");
    */
  }
}
