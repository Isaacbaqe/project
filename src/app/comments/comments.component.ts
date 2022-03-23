import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../services/post.service';
import { IComment } from '../share_calss_type/comment';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {
  commentList?:IComment[]
  constructor(private activeRouter: ActivatedRoute, private postServices: PostService ) { }

  ngOnInit(): void {
    this.activeRouter.paramMap.subscribe(params => {
      this.postServices.getallcoment(Number(params.get('postid'))).subscribe(res => {
        this.commentList = res;
      })
    })
  }
}
