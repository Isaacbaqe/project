import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.scss']
})
export class DatabindingComponent implements OnInit {

  constructor() { }
 calssanme:string="textfont"

 haserror:boolean=true
 isspeacial:boolean=true
classnames=
{
  "text-suc":this.haserror,
  "text-suc1":!this.haserror,
  "textfont":this.isspeacial
}
   
  ngOnInit(): void {
  }

}
