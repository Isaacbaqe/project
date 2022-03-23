import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-referance-binding',
  templateUrl: './template-referance-binding.component.html',
  styleUrls: ['./template-referance-binding.component.scss']
})
export class TemplateReferanceBindingComponent implements OnInit {
  msg:string=""
  constructor() { }

  ngOnInit(): void {
  }
showinfo(inputcontent: any)
{
  this.msg=inputcontent.value  
}
}
