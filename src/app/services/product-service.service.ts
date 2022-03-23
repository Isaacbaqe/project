import { Injectable } from '@angular/core';
import { Iproduct } from '../share_calss_type/interface';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  product:Iproduct[]
  constructor() { 

    this.product=
    [{ID:1,Name:"botato", Quantity:1,price:200,img:"assets/images/4.jpg" },
      {ID:2,Name:"milk", Quantity:50,price:20,img:"assets/images/5.jpg" },
      {ID:3,Name:"meet", Quantity:54,price:50,img:"assets/images/6.jpg" },
      {ID:4,Name:"notela", Quantity:15,price:10,img:"assets/images/7.jpg" },
      {ID:5,Name:"moka", Quantity:81,price:30,img:"assets/images/8.jpg" },
    ]
    

  }
  GetAllProducts()
  {
    return this.product
  }

  GetProductById(prdId:number):Iproduct[]|null
  {
     if(typeof prdId!="number" )
     {
          return null
     }
      
    return this.product.filter(p=>p.ID==prdId)
  }
 }
