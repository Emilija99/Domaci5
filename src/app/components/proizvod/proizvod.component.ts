import { Component, OnInit, Input } from '@angular/core';
import { Proizvod } from 'src/app/models/proizvod';
import {Korpa} from 'src/app/models/korpa'

@Component({
  selector: 'app-proizvod',
  templateUrl: './proizvod.component.html',
  styleUrls: ['./proizvod.component.scss']
})
export class ProizvodComponent implements OnInit {

  @Input() korpa:Korpa={
    id:0,
    proizvodi:[],
    racun:0
  };

 @Input() proizvod:Proizvod={
   id:0,
   naziv:"",
   cena:0,
   kolicina:0,
   slika:''

 };

  constructor() { }

  ngOnInit(): void {
  }

  staviUKorpu(){
    if(this.proizvod.kolicina!==0){
        this.proizvod.kolicina--;
        console.log(this.proizvod.kolicina);
        this.korpa.proizvodi.push(this.proizvod);
        console.log(this.korpa);
        this.korpa.racun+=this.proizvod.cena;
    }
    else{
      alert("Ovaj proizvod trenutno nije dostupan!");
    }
  
  }

}
