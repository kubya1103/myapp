import { Component } from '@angular/core';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
public home: any = []
  constructor(private _homeService:HomeService){
  _homeService.getcompany().subscribe(
    (data:any)=>{
      this.home = data.home
    },
    (err:any)=>{
      return("Internal server error")
    }
  )

  
  }

}
