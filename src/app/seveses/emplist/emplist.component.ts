import { Component, OnInit } from '@angular/core';
  

@Component({
  selector: 'app-emplist',
  templateUrl: './emplist.component.html',
  styleUrls: ['./emplist.component.scss']
})
export class EmplistComponent implements OnInit {
  employeelist= [ {"name":"isaac" ,"age":25},];
  
  constructor( ) {}
  ngOnInit(): void {
   
   
  
}
}
