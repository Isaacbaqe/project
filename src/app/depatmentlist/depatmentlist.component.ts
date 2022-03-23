import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
 

@Component({
  selector: 'app-depatmentlist',
  templateUrl:'./depatmentlist.component.html',
  styleUrls: ['./depatmentlist.component.scss']
})
export class DepatmentlistComponent implements OnInit {
  categorys=[
    {ID:1,Name:"Frozen Foods"},
    {ID:2,Name:"Meat "},
    {ID:3,Name:"Fish and shellfish "}
  ]
  selectedid:number=0
  constructor( private rout:Router,private activerout:ActivatedRoute) { }

  ngOnInit(): void {
    this.activerout.paramMap.subscribe((params:ParamMap)=>{
    if(params.get('id')!=null)
    {
      this.selectedid=Number(params.get('id'))

    }
    else
    {
      this.selectedid=0
    }
    })
   
  }
  gotocate(category:any)
  {
    let catid= category.ID
    this.rout.navigate(['/depatrment',catid])
    console.log(catid)

  }
  Isselected(category:any)
  {
    return category.ID==this.selectedid
  }
  
}
