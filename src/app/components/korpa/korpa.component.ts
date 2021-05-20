import { Component, OnInit, Input } from '@angular/core';
import { Korpa } from 'src/app/models/korpa';
import {faShoppingCart,faWindowClose,faMinus} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-korpa',
  templateUrl: './korpa.component.html',
  styleUrls: ['./korpa.component.scss']
})
export class KorpaComponent implements OnInit {

  faShoppingCart=faShoppingCart;
  faWindowClose=faWindowClose;
  faMinus=faMinus;
  tabelaVidljivost='skrivena';
 @Input() prozirnost={prozirnost:'proziran'};
 


  @Input() korpa:Korpa={
    id:0,
    proizvodi:[],
    racun:0
  }

  constructor() { }

  ngOnInit(): void {
  }

  ukljuciVidljivostProzora(){
    this.tabelaVidljivost='vidljiva';
    this.prozirnost.prozirnost='proziran';
   
  }

 iskljuciVidljivostProzora(){
   this.tabelaVidljivost='skrivena';
   this.prozirnost.prozirnost='neproziran';
   
 }

 izbaciProizvod(indeks:number){
   console.log(indeks);
   this.korpa.proizvodi[indeks].kolicina++;
   this.korpa.racun-=this.korpa.proizvodi[indeks].cena;
   this.korpa.proizvodi.splice(indeks,1);
 }



}
