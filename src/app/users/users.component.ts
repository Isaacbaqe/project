import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import { IUser } from '../share_calss_type/Iuser';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
   userlist?:IUser[]
  constructor(private userservis:UsersService) { }

  ngOnInit(): void {
    this.getallusers()
  }

getallusers(){
  this.userservis. getAllUsers().subscribe((res) => {
    
    this.userlist = res;
    
  });
}

 
}
