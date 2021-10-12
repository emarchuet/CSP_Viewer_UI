import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReportsService {
  _url="http://localhost:3000/reports";
  constructor(
    private http: HttpClient
  ) { 
    console.log("Servicio reports");
  }
  getReports(){
    let header=new HttpHeaders()
      .set('Type-content', 'application/json')

      return this.http.get(this._url, {
        headers: header
      });

  }
}
