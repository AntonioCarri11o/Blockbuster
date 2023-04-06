import { Component,Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Game } from 'src/app/modules/types/game';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-updategameform',
  templateUrl: './updategameform.component.html',
  styleUrls: ['./updategameform.component.css']
})
export class UpdategameformComponent implements OnInit {
  ngOnInit(): void {
    
  }
  isReadonly = false;
  constructor(public dialogRef:MatDialogRef<UpdategameformComponent>,@Inject(MAT_DIALOG_DATA)public game:Game, private gameService:GameService){}

  update(){
    try{
      const languages=this.game.languages.join(',');
      this.game.languages=languages.split(",");
    }catch(error){
      let languages:string="";
      for(let i=0;i<this.game.languages.length;i++){
        languages=languages+this.game.languages[i];
      }
      this.game.languages=languages.split(",");
    }
    if(this.game.stock<1){
      this.game.status="Agotado"
    }else{
      this.game.status="Disponible"
    }
    this.gameService.updateGame(this.game).subscribe(response=>{console.log(response.message)})
    this.close();
    window.location.reload();
  }
  close(){
    this.dialogRef.close();
  }
}
