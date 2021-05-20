import { Component } from '@angular/core';
import { Proizvod } from './models/proizvod';
import {Korpa} from './models/korpa'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'peti-domaci';
  proizvodi:Proizvod[]=[{
    id:1,
    naziv:'Bicikla',
    cena:10799,
    kolicina:11,
    slika:'https://cremecycles.com/images/glowne/12.jpg'
    
  },
  {
  id:2,
    naziv:'Lampa',
    cena:3999,
    kolicina:20,
    slika:'https://homedepot.scene7.com/is/image/homedepotcanada/p_1001030305.jpg?wid=1000&hei=1000&op_sharpen=1'
    
  },
  
   { id:3,
      naziv:'Stolica',
      cena:4499,
      kolicina:7,
      slika:'https://www.capitaldiningchairs.co.uk/wp-content/uploads/2019/08/URB-111-YE_CO2-scaled.jpg'
      
    },
    { id:4,
      naziv:'Kofer',
      cena:6700,
      kolicina:9,
      slika:'data:image/jpeg;base64,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'
      
    },
    { id:5,
      naziv:'Sto',
      cena:6899,
      kolicina:11,
      slika:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY8tZFYuyyWc7XGezQIoBKhYfYvH070R8_vw&usqp=CAU'
      
    },
    { id:3,
      naziv:'Suncobran',
      cena:3000,
      kolicina:6,
      slika:'data:image/jpeg;base64,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'
      
    },


]

  korpa:Korpa={
    id:1,
    proizvodi:[],
    racun:0
  }

 prozirnost={prozirnost:'neproziran'};
 
}
