import { Component, OnInit } from '@angular/core';
import { login } from '../share_calss_type/interface';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor() { }
  userlogin=new login("","");
  ngOnInit(): void {
  }

}
