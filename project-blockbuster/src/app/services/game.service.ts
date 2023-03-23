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
    createGame(payload:any){
        const headers={
            "Content-type":"application/json"
        }
        return this.http.post<any>(`${APP_URL}api/game`,payload,{headers})
    }
}