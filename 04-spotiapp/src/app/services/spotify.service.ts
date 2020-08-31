import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http:HttpClient) {
    console.log("Listo el servicio de spotify");
   }
   getQuery(query:string){
     const url=`https://api.spotify.com/v1/${query}`;

     const headers = new HttpHeaders({
      'Authorization': 'Bearer BQAotGLEDeY7Gmip9cytl0TCBbeK4F17JFBJ2HG_2wrrYH-dzUVvNs96xz1JRni_zTGQMTWZUII8fdXmo3s'
    })

    return this.http.get(url,{headers})
   }


   getNewReleases(){
    return this.getQuery('browse/new-releases?limit=20')
    .pipe(map(data=>data['albums'].items));
   }

   getArtistas(termino:string){
    return this.getQuery(`search?q=${termino}&type=artist&limit=15`)
    .pipe(map(data=>data['artists'].items));
   } 

   getArtista(id:string){
    return this.getQuery(`artists/${id}`);
    //.pipe(map(data=>data['artists'].items));
   } 

   getTopTracks(id:string){
    return this.getQuery(`artists/${id}/top-tracks?country=us`)
    .pipe(map(data=>data['tracks']));
   } 

  
}

