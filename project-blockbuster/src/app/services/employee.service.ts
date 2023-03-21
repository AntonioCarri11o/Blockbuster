import { HttpClient } from "@angular/common/http";
import {Injectable} from "@angular/core";
import {catchError} from "rxjs";
import { Movie } from "../modules/types/movie";
import { APP_URL } from "./base-url";

@Injectable({
    providedIn:'root'
})
export class EmployeeService{
    private loading:boolean=false;
    getEmployees(){
        return this.http.get<any>(`${APP_URL}api/employee`)
    }
    createEmployee(payload:any){
        const headers={
            "Content-type":"application/json"
        }
        return this.http.post<any>(`${APP_URL}api/employee/`,payload,{headers});
    }
    updateEmployee(payloaad:any){
        const headers={
            "Content-type":"application/json"
        }
        return this.http.put<any>(`${APP_URL}api/employee/`,payloaad,{headers});
    }
    changePassword(payload:any){
        const headers={
            "Content-type":"application/json"
        }
        return this.http.put<any>(`${APP_URL}api/employee/password/`,payload,{headers})
    }
    deleteEmployee(id:string){
        return this.http.delete<any>(`${APP_URL}api/employee/${id}`)
    }
    constructor(private http:HttpClient){}
}