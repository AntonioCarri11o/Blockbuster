import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Game } from 'src/app/modules/types/game';
import { GameService } from 'src/app/services/game.service';
import { NewgameformComponent } from '../newgameform/newgameform.component';

@Component({
  selector: 'app-list-games',
  templateUrl: './list-games.component.html',
  styleUrls: ['./list-games.component.css']
})
export class ListGamesComponent implements OnInit {
  constructor(
    private gameService:GameService,
    public dialog:MatDialog
  ){}
  games:Game[]=[]
  displayedColumns:string[]=['tittle','details','inventory','status']
  dataSource=new MatTableDataSource(this.games);
  ngOnInit(): void {
    this.gameService.getGames().subscribe(response=>{this.dataSource=response})
      localStorage.setItem('activePath','games')
  }

  addGame(){
    const dialogRef=this.dialog.open(NewgameformComponent,{width:"35%"})
  }
  updateGame(game:Game){

  }
}
