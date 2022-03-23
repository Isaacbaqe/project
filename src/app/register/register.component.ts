import { Component, OnInit } from '@angular/core';
import { usersinfo } from '../share_calss_type/interface';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor() { }
  public topics=["Facebook","Twitter","Google"]
   public user=new usersinfo("","","","");
  ngOnInit(): void {
  }
  senddata()
  {
    console.log("data is sended");
  }
}
