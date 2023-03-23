import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { GameService } from 'src/app/services/game.service';


let max = 5;
const isReadonly = false;
@Component({
  selector: 'app-newgameform',
  templateUrl: './newgameform.component.html',
  styleUrls: ['./newgameform.component.css']
})
export class NewgameformComponent {
constructor(public matDialogRef:MatDialogRef<NewgameformComponent>, private gameService:GameService){}
  game:any={
    price:0,
    stock:0,
    rate:0,
    description:"",
    languages:[],
    genre:"",
    status:"",
    studio:""
  }

  close():void{
    this.matDialogRef.close();
  }
  send(){
    this.game.languages=this.game.split(",");
    this.gameService.createGame(this.game).subscribe(response=>{console.log(response.message)})
  }
}
