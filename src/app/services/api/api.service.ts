// modules
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';

// models
import { User } from '../../shared/models/user';
import { Post } from '../../shared/models/post';
import { Comment } from '../../shared/models/comment';



@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient,) { }

  async getUsers(): Promise<User[]> {
    const result: User[] = (await this.http
      .get(environment.API.GET_USERS)
      .toPromise()) as User[];
    return result;
  }
  async getPostsByUser(userId: number): Promise<Post[]> {
    const result: Post[] = (await this.http
      .get(environment.API.GET_POSTS_BY_USER +'/'+ userId +'/'+ 'posts')
      .toPromise()) as Post[];
    return result;
  }
  async getCommentsByPostId(commentId: number): Promise<Comment[]> {
    const result: Comment[] = (await this.http
      .get(environment.API.GET_COMMENTS_BY_POST +'/'+ commentId +'/'+ 'comments')
      .toPromise()) as Comment[];
    return result;
  }
}
