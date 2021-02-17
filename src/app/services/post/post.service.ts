import { Injectable } from '@angular/core';
//models
import{Post}from '../../shared/models/post';
import{Comment}from '../../shared/models/comment';

// services
import { ApiService } from '../api/api.service';
import { from } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private apiService: ApiService) { }

  async getPostsByUserId(userId:number): Promise<Post[]> {
    const data: Array<Post> = await this.apiService.getPostsByUser(userId);
    if (data) {
    return data;
      } else {
        console.log(' data null');
      }
    }
    async getCommentsByPostId(postId:number): Promise<Comment[]> {
      const data: Array<Comment> = await this.apiService.getCommentsByPostId(postId);
      if (data) {
      return data;
        } else {
          console.log(' data null');
        }
      }
}
