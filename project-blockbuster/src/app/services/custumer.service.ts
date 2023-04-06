import { HttpClient } from "@angular/common/http"
import {Injectable} from "@angular/core";
import { APP_URL } from "./base-url";

@Injectable({
    providedIn:'root'
})
export class CustomerService{
    private loading:boolean=false;
    constructor(private http:HttpClient){}
    getCustomers(){
        return this.http.get<any>(`${APP_URL}api/customer/`)
    }
}