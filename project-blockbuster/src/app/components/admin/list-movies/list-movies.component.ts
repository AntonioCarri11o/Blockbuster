
import { BreakpointObserver } from '@angular/cdk/layout';
import { Component,OnInit, ViewChild,AfterViewInit } from '@angular/core';
import {MatSort, Sort} from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { LoginStateService } from 'src/app/services/login-state.service';
import  {MovieService}  from 'src/app/services/movie.service';
import { Movie } from 'src/app/modules/types/movie'; 
import {LiveAnnouncer} from '@angular/cdk/a11y';
import { MatDialog } from '@angular/material/dialog';
import { NewmovieformComponent } from '../newmovieform/newmovieform.component';
import { UpdatemovieformComponent } from '../updatemovieform/updatemovieform.component';


let movies:Movie[];
@Component({
  selector: 'app-list-movies',
  templateUrl: './list-movies.component.html',
  styleUrls: ['./list-movies.component.css']
})

export class ListMoviesComponent implements OnInit{

  displayedColumns:string[]=['tittle','details','inventory','status']
  dataSource=new MatTableDataSource(movies);
  
  @ViewChild(MatSort)
  sort!: MatSort;
  constructor(
    private breakpointObserver:BreakpointObserver,
    private router:Router,
    private loginStateService:LoginStateService,
    private _liveAnnouncer:LiveAnnouncer,
    private movieService:MovieService,
    public dialog:MatDialog
){
  
}

  ngOnInit(){
    this.movieService.getMovies().subscribe(resp=>{this.dataSource=resp});
    localStorage.setItem('activePath',"movies");
  }

  addMovie(){
    const dialogRef=this.dialog.open(NewmovieformComponent,{width:"35%"});
  }
  updateMovie(movie:Movie){
    const dialogRef=this.dialog.open(UpdatemovieformComponent,{data:movie,width:"35%"});
  }

}


