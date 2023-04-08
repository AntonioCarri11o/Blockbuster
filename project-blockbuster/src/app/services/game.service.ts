import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs';
import { APP_URL } from './base-url';

@Injectable({
    providedIn:'root'
})
export class GameService{
    constructor(private http:HttpClient){}
    private loading:boolean=false;

    getGames(){
        return this.http.get<any>(`${APP_URL}api/game`);
    }
    getSorter(field:String,order:Number){
        return this.http.get<any>(`${APP_URL}api/game/${field}/${order}`)
    }
    getByTags(field:String,value:String,orderField:String,order:Number){
        return this.http.get<any>(`${APP_URL}api/game/${field}/${value}/${orderField}/${order}`)
    }
    createGame(payload:any){
        const headers={
            "x-access-token":`${localStorage.getItem('token')}`,
            //"Authorization": `Bearer ${localStorage.getItem('token')}`
            "Content-type":"application/json"
        }
        return this.http.post<any>(`${APP_URL}api/game`,payload,{headers})
    }
    updateGame(payload:any){
        const headers={
            "Content-type":"application/json"
        }
        return this.http.put<any>(`${APP_URL}api/game`,payload,{headers})
    }
}