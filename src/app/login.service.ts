import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private _httpCLient: HttpClient) { }
  login(data:any):Observable<any>{
    return this._httpCLient.get("https://reqres.in/api/login,data")
  }
}
