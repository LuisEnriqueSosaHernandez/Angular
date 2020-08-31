import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { DatePipe } from "@angular/common";


@Injectable({
  providedIn: 'root'
})
export class PeliculasService {
  private apiKey="c4d049d7dba6bc63fa08f5fa4baac98b";
  private urlRoot="https://api.themoviedb.org/3/";

  peliculas:any[]=[];


  constructor(private http:HttpClient,
    private datePipe:DatePipe) { }

  transformDate(date:Date) {
    return this.datePipe.transform(date, 'yyyy-MM-dd');
  }

  getPopulares(){
    let url= `${this.urlRoot}discover/movie?sort_by=popularity.desc&api_key=${this.apiKey}`;
    return this.http.get( url ).pipe(map( (res: any) => res.results));

  }

  getPopularesNinos(){
    let url= `${this.urlRoot}discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&api_key=${this.apiKey}`;
    return this.http.get( url ).pipe(map( (res: any) => res.results));

  }

  getCartelera(){
    let desde=new Date();
    let hasta=new Date();
    hasta.setDate(hasta.getDate()+7);
    let desdeStr=this.transformDate(desde);
    let hastaStr=this.transformDate(hasta)
    let url= `${this.urlRoot}discover/movie?primary_release_date.gte=${desdeStr}&primary_release_date.lte=${hastaStr}&api_key=${this.apiKey}`;
    return this.http.get( url ).pipe(map( (res: any) => res.results));
  }
  buscarPelicula(texto:string){
  let url= `${this.urlRoot}search/movie?query=${texto}&sort_by=popularity.desc&api_key=${this.apiKey}`;
  
return this.http.get( url ).pipe(map( (res: any) => {
  this.peliculas=res.results;
  return res.results;
}));
 }

 
 getPelicula(id:string){
  let url= `${this.urlRoot}movie/${id}?api_key=${this.apiKey}`;
  return this.http.get( url ).pipe(map( (res: any) => res));

}

}
