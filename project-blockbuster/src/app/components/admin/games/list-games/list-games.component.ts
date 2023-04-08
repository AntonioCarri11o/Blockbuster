import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Game } from 'src/app/modules/types/game';
import { GameService } from 'src/app/services/game.service';
import { NewgameformComponent } from '../newgameform/newgameform.component';
import { UpdategameformComponent } from '../updategameform/updategameform.component';

@Component({
  selector: 'app-list-games',
  templateUrl: './list-games.component.html',
  styleUrls: ['./list-games.component.css']
})
export class ListGamesComponent implements OnInit {
  options:string[]=["tittle","studio","genre","languages",]
  tArrow=""
  pArrow=""

  payload={
    order:1,
    field:"",
    orderField:"id",
    value:"",
  }
  tokenRole=localStorage.getItem('role');
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
  tOrder(){
    this.payload.order=this.payload.order*-1;
    this.pArrow=""
    if(this.payload.order==1)this.tArrow="↑"
    if(this.payload.order==-1)this.tArrow="↓"
    this.payload.orderField="tittle"
    this.findByTags();
  }
  pOrder(){
    this.payload.order=this.payload.order*-1;
    this.tArrow=""
    if(this.payload.order==1)this.pArrow="↑"
    if(this.payload.order==-1)this.pArrow="↓"
    this.payload.orderField="price"
    this.findByTags();
  }

  findByTags(){
    if(this.payload.field===""||this.payload.value===""){
      this.gameService.getSorter(this.payload.orderField,this.payload.order).subscribe(response=>{this.dataSource=response})
    }else{
      this.gameService.getByTags(this.payload.field,this.payload.value,this.payload.orderField,this.payload.order).subscribe(response=>{this.dataSource=response})
    }
  }
  updateGame(game:Game){
    const dialogRef=this.dialog.open(UpdategameformComponent,{ data:game,width:"35%"})
  }
}
