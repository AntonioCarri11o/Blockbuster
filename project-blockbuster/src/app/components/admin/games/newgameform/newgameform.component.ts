import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-newgameform',
  templateUrl: './newgameform.component.html',
  styleUrls: ['./newgameform.component.css']
})
export class NewgameformComponent implements OnInit {
constructor(public matDialogRef:MatDialogRef<NewgameformComponent>, private gameService:GameService){

}
ngOnInit(): void {
  
}
isReadonly = false;
  game:any={
    price:0,
    stock:0,
    rate:0,
    description:"",
    languages:[],
    genre:"",
    status:"Disponible",
    studio:""
  }

  close():void{
    this.matDialogRef.close();
  }
  send(){
    this.game.languages=this.game.languages.split(",");
    if(this.game.stock<1){
      this.game.status="Agotado"
    }
    this.gameService.createGame(this.game).subscribe(response=>{console.log(response.message)})
    this.close();
    window.location.reload();
  }
}
