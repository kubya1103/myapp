import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private _httpclient:HttpClient) { }
  private baseURL='https://6572df5d192318b7db412dfe.mockapi.io/employees'

  getcompany():Observable<any>{
    return this._httpclient.get(this.baseURL)
  }

}



    
  

