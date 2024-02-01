import { Injectable } from '@angular/core';
import { Post } from './post.model';
import { PostServiceService } from './post-service.service';
import * as jsonData from '../../assets/posts/posts.json';

@Injectable({
  providedIn: 'root',
})
export class ApiServiceService {
  jsonFileLocation: string = '';
  jsonContent: Post[] = [];

  fetchRecipes(): Post[] {
    this.jsonContent = jsonData.posts;
    this.postService.setPosts(this.jsonContent.slice());
    return this.jsonContent.slice();
  }

  constructor(private postService: PostServiceService) {}
}
