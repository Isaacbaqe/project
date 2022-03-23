import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IComment } from '../share_calss_type/comment';
import { IPost } from '../share_calss_type/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private urlAPI: HttpClient) { }
  getallposts(): Observable<IPost[]> {
    return this.urlAPI.get<IPost[]>(`${environment.httpUrl}/posts`);
    
  }
  getallcoment(id:number): Observable<IComment[]> {
    return this.urlAPI.get<IComment[]>(`${environment.httpUrl}/posts/${id}/comments`);
  }
}
