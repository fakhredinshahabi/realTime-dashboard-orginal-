import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class Httpservice {
  constructor(private http:HttpClient){}
  getUser(){
   return this.http.get('')
  }
}
