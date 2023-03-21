import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Movie } from 'src/app/modules/types/movie';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-updatemovieform',
  templateUrl: './updatemovieform.component.html',
  styleUrls: ['./updatemovieform.component.css']
})
export class UpdatemovieformComponent implements OnInit{
  ngOnInit(): void {
    
  }
  constructor(public dialogRef:MatDialogRef<UpdatemovieformComponent>,@Inject(MAT_DIALOG_DATA)public movie:Movie, private movieService:MovieService){}
  close():void{
    this.dialogRef.close();
  }
  update(){
    try{
      const genre=this.movie.genre.join();
      this.movie.genre=genre.split(",");
    }catch(error){
      let genre:string="";
      let languages:string="";
      for(let i=0;i<this.movie.genre.length;i++){
        genre= genre+this.movie.genre[i];
        languages=languages+this.movie.languages[i];
      }
      this.movie.genre=genre.split(",");
    }
    try{
      const languages=this.movie.languages.join();
      this.movie.languages=languages.split(",");
    }catch(error){
      let languages:string="";
      for(let i=0;i<this.movie.genre.length;i++){
        languages=languages+this.movie.languages[i];
      }
      this.movie.languages=languages.split(",");
    }
    
    if(this.movie.stock<1){
      this.movie.status="Agotado"
    }else{
      this.movie.status="Disponible"
    }
    console.log(this.movie);
    this.movieService.update(this.movie).subscribe((response)=>{console.log(response.message)})
    this.dialogRef.close();
    //window.location.reload();
  }
}
