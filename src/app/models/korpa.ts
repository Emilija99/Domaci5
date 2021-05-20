import { Proizvod } from "./proizvod";


export interface Korpa{
    id:number,
    proizvodi:Proizvod[],
    racun:number

}