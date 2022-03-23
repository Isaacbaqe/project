import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeservicesService {

  constructor() { }
  GetAllEmployee()
  {
    return [
      { "id":1, "name":"isaac" ,"age":25},
      { "id":2,"name":"tony" ,"age":22},
      { "id":3,"name":"jhan" ,"age":23},
      { "id":4,"name":"mina" ,"age":24},
      { "id":5,"name":"jony" ,"age":25}
    ]
  }
}
