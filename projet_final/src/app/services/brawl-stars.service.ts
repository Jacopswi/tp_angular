import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JsonDataService {

  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    return this.http.get<any>('../assets/API_Brawlers.json');
  }
}