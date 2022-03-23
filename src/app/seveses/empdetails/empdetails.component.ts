import { Component, OnInit } from '@angular/core';
 

@Component({
  selector: 'app-empdetails',
  templateUrl: './empdetails.component.html',
  styleUrls: ['./empdetails.component.scss']
})
export class EmpdetailsComponent implements OnInit {

  employeelist=[
    {"name":"mina" ,"age":25},
    
 
  ]
  constructor() { }

  ngOnInit(): void {
   
  }

}
