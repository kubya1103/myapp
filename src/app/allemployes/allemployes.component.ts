import { Component } from '@angular/core';
import { AllemployesService } from '../allemployes.service';

@Component({
  selector: 'app-allemployes',
  templateUrl: './allemployes.component.html',
  styleUrls: ['./allemployes.component.css']
})
export class AllemployesComponent {

  public allemployesService:any = [];  

  constructor(private _allemployesService:AllemployesService){
    _allemployesService.getcompany().subscribe(
      (data:any)=>{
        this.allemployesService = data.allemployes
      },
      (data:any)=>{
        return("Internal server error")
      }
    )
   
  }

  submit(){
    console.log(this.allemployesService)
  }

}
