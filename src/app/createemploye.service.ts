import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CreateemployeService {
  private baseURL ='https://6572df5d192318b7db412dfe.mockapi.io/employees'
  constructor(private _httpclient:HttpClient) { }

  getcompany():Observable<any>{
    return this._httpclient.get(this.baseURL)
  }
}
