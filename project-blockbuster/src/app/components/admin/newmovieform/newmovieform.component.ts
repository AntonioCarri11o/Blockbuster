import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Movie } from 'src/app/modules/types/movie';
import { MovieService } from 'src/app/services/movie.service';
@Component({
  selector: 'app-newmovieform',
  templateUrl: './newmovieform.component.html',
  styleUrls: ['./newmovieform.component.css']
})
export class NewmovieformComponent implements OnInit {
  constructor(public dialog:MatDialogRef<NewmovieformComponent>, private movieService:MovieService){}
  movie:any={
    tittle:"",
    duration:"",
    price:0,
    stock:0,
    producer:"",
    languages:[],
    genre:[],
    status:"Disponible"
  }
  ngOnInit():void{
  }
  close():void{
    this.dialog.close();
  }
  send(){
    this.movie.genre=this.movie.genre.split(",");
    this.movie.languages=this.movie.languages.split(",");
    console.log(this.movie);
    this.movieService.createMovie(this.movie).subscribe((response)=>{console.log(response.message)})
    this.dialog.close();
    window.location.reload();
  }
}