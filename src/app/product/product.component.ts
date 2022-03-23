import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../services/product-service.service';
 
 
import { DiscoundOffers, Icategory, Iproduct} from '../share_calss_type/interface';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})

 export class ProductComponent implements OnInit {
  
   Discount=DiscoundOffers
   
    products:Iproduct[]|null=[{ ID:0, Name:"m", Quantity:0,price:0,img:"assets/images/20.jpg" }]
   categorys:Icategory[]
   Storename:string=""
   storlogo:string=""
    proid:number=0
   clientname:string=""
   clientname1:string=""
 public  Ispurshased:boolean=true
  constructor(private servisproduct:ProductServiceService) {
    
      
  //  this.products=[{ID:1,Name:"botato", Quantity:1,price:200,img:"assets/images/4.jpg" },
  //  {ID:2,Name:"milk", Quantity:50,price:20,img:"assets/images/5.jpg" },
  //  {ID:3,Name:"meet", Quantity:54,price:50,img:"assets/images/6.jpg" },
  //  {ID:4,Name:"notela", Quantity:15,price:10,img:"assets/images/7.jpg" },
  //  {ID:5,Name:"moka", Quantity:81,price:30,img:"assets/images/8.jpg" },
  //   ]
  this.categorys=[{ID:1,Name:"Frozen Foods"},{ID:2,Name:"Meat "},{ID:3,Name:"Fish and shellfish "}]
   }
  
  ngOnInit(): void {
  }
  showmes()
{
   
 this.Ispurshased=!this.Ispurshased;
}
renderValues()
{
   this.products=this.servisproduct.GetAllProducts()
}


renderValuesid()
{
   
   this.products=this.servisproduct.GetProductById(Number(this.proid))
}
}
