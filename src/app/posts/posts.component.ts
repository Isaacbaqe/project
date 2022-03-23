import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostService } from '../services/post.service';
import { IPost } from '../share_calss_type/post';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  constructor(private servisepost:PostService  ,private router:Router) { }
  postlist?:IPost[]
  ngOnInit(): void {
    this.getallposts()
  }
  getallposts()
  {
    this.servisepost.getallposts().subscribe((res) => {
       
      this.postlist = res;
     
    });
  }
  seeComment(postID: number) {
    this.router.navigateByUrl(`Posts/${postID}/Comments`);
  }
}
