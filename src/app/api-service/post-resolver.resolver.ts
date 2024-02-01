import { ResolveFn } from '@angular/router';
import { Post } from './post.model';
import { inject } from '@angular/core';
import { PostServiceService } from './post-service.service';
import { ApiServiceService } from './api-service.service';

export const postResolverResolver: ResolveFn<Post[]> = (route, state) => {
  const posts = inject(PostServiceService).getPosts();
  if(posts.length == 0) {
    return inject(ApiServiceService).fetchRecipes();
  }
  return posts;
};
