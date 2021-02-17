import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Params, Router } from '@angular/router';
import { Comment } from 'src/app/shared/models/comment';
//services
import { PostService } from '../../services/post/post.service';
@Component({
  selector: 'app-comments-post',
  templateUrl: './comments-post.component.html',
  styleUrls: ['./comments-post.component.scss']
})
export class CommentsPostComponent implements OnInit {

  constructor(public postService: PostService,
    private activatedRoute: ActivatedRoute) { }
  comments: Comment[] = [];
  commentId: number;

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((params: Params) => {
      if (params['commentId'])
        this.commentId = params['commentId'];
        this.refresh();
          //get comments by post Id every 30 sec
          setInterval(() => {
            this.refresh(); 
          }, 30000);
    });
  }

  refresh(){
    this.postService.getCommentsByPostId(this.commentId).then((data) => {
      this.comments = data;
    });
  }
}
