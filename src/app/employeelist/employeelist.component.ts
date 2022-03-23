import { Component, OnInit } from '@angular/core';
import { EmployeeservicesService } from '../employeeservices.service';

@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.scss']
})
export class EmployeelistComponent implements OnInit {

  constructor(private employeeservices:EmployeeservicesService) { }

  ngOnInit(): void {
  }
  renderValuesid()
{
   
    
}
}
