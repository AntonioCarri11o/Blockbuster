import { HttpClient } from "@angular/common/http"
import {Injectable} from "@angular/core";
import { APP_URL } from "./base-url";

@Injectable({
    providedIn:'root'
})
export class CustomerService{
    private loading:boolean=false;
    constructor(private http:HttpClient){}
    createCustomer(payload:any){
        const headers={
            "Content-type":"application/json"
        }
        return this.http.post<any>(`${APP_URL}api/customer/`,payload,{headers});
    }
    getCustomers(){
        return this.http.get<any>(`${APP_URL}api/customer/`)
    }
    sortBy(field:String,order:Number){
        return this.http.get<any>(`${APP_URL}api/customer/${field}/${order}/`)
    }
    findByTags(field:String,value:String,orderField:String,order:Number){
        return this.http.get<any>(`${APP_URL}api/customer/${field}/${value}/${orderField}/${order}`)
    }
}