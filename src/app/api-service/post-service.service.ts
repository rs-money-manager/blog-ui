import { Injectable } from '@angular/core';
import { Post } from './post.model';
import { Subject } from 'rxjs';
import { ApiServiceService } from './api-service.service';

@Injectable({
  providedIn: 'root'
})
export class PostServiceService {

  constructor() { }

  private posts: Post[] = [];

  dynamicPosts = new Subject<Post[]>();

  setPosts(posts: Post[]) : void {
    this.posts = posts;
    this.dynamicPosts.next(this.posts.slice());
  }

  getPosts(): Post[] {
    return this.posts.slice();
  }

  
}
