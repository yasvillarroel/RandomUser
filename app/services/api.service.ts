import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';//agregar importación
import { Observable } from 'rxjs';//agregar importación

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiURL = 'http://randomuser.me/api'//
  constructor(private http: HttpClient) { }//generando una instancia para poder utilizarla dentro de mi clase

  //método para poder obtener los usuarios
  getRandomUsers(count: number): Observable <any>{
    //observable permite realizar programación reactiva
    return this.http.get(`${this.apiURL}/?results=${count}`); //petición url
  }
}

