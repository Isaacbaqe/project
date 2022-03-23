import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { __param } from 'tslib';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.scss']
})
export class ProductdetailsComponent implements OnInit {

  prid:any

  constructor( private acrivated:ActivatedRoute, private rout:Router) { }

  ngOnInit(): void {
    // this.prid= Number( this.acrivated.snapshot.paramMap.get('id'))
    this.acrivated.paramMap.subscribe((param:ParamMap)=>
    {
      this.prid=Number(param.get('id'))
    })
  }
  onnext()
  {
     let nexid=this.prid+1
     this.rout.navigate(['/depatrment',nexid])
  }
  onprev()
  {
     let previd=this.prid-1
     this.rout.navigate(['/depatrment',previd])
     console.log(previd)
  }
  gotothilist()
  {
    this.rout.navigate(['/depatrment',{id:this.prid}])
  }
  gotooverview()
  {
    this.rout.navigate(['overview'],{relativeTo:this.acrivated})
  }
  gotoinformationcontant()
  {
    this.rout.navigate(['contactinformation'],{relativeTo:this.acrivated})
  }
}
