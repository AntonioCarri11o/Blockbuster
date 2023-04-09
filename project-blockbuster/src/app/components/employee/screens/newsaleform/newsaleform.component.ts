import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Game } from 'src/app/modules/types/game';
import { Movie } from 'src/app/modules/types/movie';
import { CustomerService } from 'src/app/services/custumer.service';
import { GameService } from 'src/app/services/game.service';
import { MovieService } from 'src/app/services/movie.service';
import { SaleService } from 'src/app/services/sale.service';

@Component({
  selector: 'app-newsaleform',
  templateUrl: './newsaleform.component.html',
  styleUrls: ['./newsaleform.component.css']
})
export class NewsaleformComponent {
  movies:Movie[]=[];
  games:Game[]=[];
  constructor(
    public dialog:MatDialogRef<NewsaleformComponent>,
    private saleService:SaleService,
    private movieService:MovieService,
    private gameService:GameService){
      gameService.getGames().subscribe(response=>{this.games=response});
      movieService.getMovies().subscribe(response=>{this.movies=response});
  }
  customer:any={
    name:"",
    address:"",
    phone_number:""
  }
  sale:any={
    productType:"Movie",
    product:{},
    customer:{},
    price:0,
    quantity:1,
    total:0,
  }
  setPrice(price:Number){
    this.sale.price=price;
    this.sale.total=this.sale.price*this.sale.quantity;
  }
  setTotal(){
    this.sale.total=this.sale.price*this.sale.quantity;    
  }
  clean(){
    this.sale.price=0;
    this.sale.quantity=0;
    this.sale.total=0;
    this.sale.product._id=""
  }
  close():void{
    this.dialog.close();
  }
  send(){
    this.sale.customer=this.customer;
    this.saleService.newSale(this.sale).subscribe(response=>{console.log(response)})
    this.close();
  }
}
