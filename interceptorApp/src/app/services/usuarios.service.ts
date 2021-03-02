import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError, map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private httpClientt:HttpClient) { }

  obtenerUsuarios(){
    let params = new HttpParams().append('page','2');
    params=params.append('nombre','kike');
    
    
   return this.httpClientt.get(`https://reqrhes.in/api/user?page`,{
     params
   }).pipe(
     map(resp=>resp['data'])
   )
  }


}
