import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Params, Router } from '@angular/router';
//services
import { UserService } from '../../services/user/user.service';
import { PostService } from '../../services/post/post.service';
//models
import { Post } from 'src/app/shared/models/post';

@Component({
  selector: 'app-posts-user',
  templateUrl: './posts-user.component.html',
  styleUrls: ['./posts-user.component.scss']
})



export class PostsUserComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute,
    public userService: UserService,
    public postService: PostService) { }

  userId: number;
  posts: Post[] = [];
  displayedColumns: string[] = ['id', 'title', 'body'];

  ngOnInit(): void {

    this.activatedRoute.queryParams.subscribe((params: Params) => {
      //get userId by routing
      if (params['userId'])
        this.userId = params['userId'];
      else //get first user before load app
        this.userId = this.userService.users?.value[0].id;
        //get posts by User Id
      this.postService.getPostsByUserId(this.userId).then((data) => {
        this.posts = data;
      });
    });
  }

}
