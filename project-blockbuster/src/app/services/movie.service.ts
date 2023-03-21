import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs';
import { APP_URL } from './base-url';

@Injectable({
    providedIn:'root'
})

export class MovieService{

    constructor(private http:HttpClient){}
    private loading:boolean=false;

    getMovies(){
        return this.http.get<any>(`${APP_URL}api/movie`)
    }
    createMovie(payload:any){
        const headers={
            "Content-type":"application/json"
        }
        return this.http.post<any>(`${APP_URL}api/movie/`,payload,{headers})
    }
    update(payload:any){
        const headers={
            "Content-type":"application/json"
        }
        return this.http.put<any>(`${APP_URL}api/movie/`,payload,{headers})
    }

}