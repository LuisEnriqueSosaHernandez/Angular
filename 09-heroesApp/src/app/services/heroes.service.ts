import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HeroeModel } from '../models/heroe.model';
import { map,delay } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  private URL = 'https://heroes-4becd.firebaseio.com'

  constructor(private http:HttpClient) { }

  crearHeroe(heroe:HeroeModel){
      return this.http.post(`${this.URL}/heroes.json`,heroe).pipe(map((resp:any)=>{
        heroe.id=resp.name;
        return heroe;
      }));
  }
  actualizarHeroe(heroe:HeroeModel){
    const heroeTemp = {
      ...heroe
    };
    delete heroeTemp.id;
    return this.http.put(`${this.URL}/heroes/${heroe.id}.json`,heroeTemp);
  }
  getHeroes(){
    return this.http.get(`${this.URL}/heroes.json`).pipe(
      map(this.crearArreglo),
      delay(1500)
    );
  }
  private crearArreglo(heroesObj:object){
     const heroes:HeroeModel[]=[];
     
     if(heroesObj === null){
       return [];
     }
     Object.keys(heroesObj).forEach(key =>{
        const heroe:HeroeModel = heroesObj[key];
        heroe.id=key;
        heroes.push(heroe);
     });
     return heroes;
  }
  getHeroe(id:string){
    return this.http.get(`${this.URL}/heroes/${id}.json`);
  }
  deleteHeroe(id:string){
    return this.http.delete(`${this.URL}/heroes/${id}.json`);
  }
}