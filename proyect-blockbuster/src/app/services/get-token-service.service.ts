import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {APP_URL} from 'src/app/services/base-url';

@Injectable({
    providedIn:'root'
})
export class GetTokenService{
    loading:boolean=false;
    edit:boolean=false;
    roleUser:string="";
    role:string="";

    constructor(private http:HttpClient){}
}