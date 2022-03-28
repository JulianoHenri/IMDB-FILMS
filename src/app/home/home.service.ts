import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private readonly API = 'http://www.omdbapi.com/?t='
  private readonly APIKEY = '&apikey=d191b7d';
  constructor(private http: HttpClient) { }


  getImdb(param: String){
     return this.http.get(this.API + param + this.APIKEY);
  }
}
