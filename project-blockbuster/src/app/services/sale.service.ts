import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { APP_URL } from "./base-url";

@Injectable({
    providedIn:'root'
})
export class SaleService{
    constructor(private http:HttpClient){}
    private loading:boolean=false;

    getSales(){
        return this.http.get<any>(`${APP_URL}api/sale/`);
    }
}