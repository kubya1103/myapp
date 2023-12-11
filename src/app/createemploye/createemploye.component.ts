import { Component } from '@angular/core';
import { CreateemployeService } from '../createemploye.service';

@Component({
  selector: 'app-createemploye',
  templateUrl: './createemploye.component.html',
  styleUrls: ['./createemploye.component.css']
})
export class CreateemployeComponent {

  public createEmploye: any = []

  constructor(private _createService:CreateemployeService){

    _createService.getcompany().subscribe(
      (data:any)=>{
        this.createEmploye = data.createEmploye
      },
      (data:any)=>{
        return("Internal server error")
      }
    )

  }

}
