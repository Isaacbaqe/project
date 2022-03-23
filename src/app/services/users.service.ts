import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { IUser } from '../share_calss_type/Iuser';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
   
  constructor(private urlAPI: HttpClient) { }
  getAllUsers(): Observable<IUser[]> {
    return this.urlAPI.get<IUser[]>(`${environment.httpUrl}/users`);
  }
}
