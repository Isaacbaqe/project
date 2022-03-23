import { Pipe, PipeTransform } from '@angular/core';
 
import { Iproduct } from '../share_calss_type/interface';
@Pipe({
  name: 'productfilter'
})
export class MathematicsPipe implements PipeTransform {

  transform(pro: Iproduct[]  ,searchitem:string):Iproduct[]|null{
  //  if(!pro ||searchitem)
  //  {
  //    return pro
  //  }
  //  return pro.filter(pro=>pro.Name.toLowerCase().indexOf(searchitem.toLowerCase())!==-1)
   
  return pro?.filter(pro=>pro.Name.toLowerCase().indexOf(searchitem.toLowerCase())!==-1)
  

}
}