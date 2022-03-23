import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmpsevecesService {

  constructor() { }
  getAllemp()
  {
    return[
      {"name":"isaac" ,"age":25},
       {"name":"tony" ,"age":25},
        {"name":"jo" ,"age":25},
         {"name":"mina" ,"age":25},
          {"name":"galal" ,"age":25}
   
    ]
  }
}
