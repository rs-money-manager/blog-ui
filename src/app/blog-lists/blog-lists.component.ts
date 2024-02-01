import { Component, OnInit } from '@angular/core';
import { PostServiceService } from '../api-service/post-service.service';
import { Post } from '../api-service/post.model';
import { NgFor } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ApiServiceService } from '../api-service/api-service.service';

@Component({
  selector: 'app-blog-lists',
  standalone: true,
  imports: [NgFor, RouterModule],
  templateUrl: './blog-lists.component.html',
  styleUrl: './blog-lists.component.css'
})
export class BlogListsComponent implements OnInit {

  posts: Post[] = [];

  constructor(private postService: PostServiceService) {}

  ngOnInit(): void {
    this.posts = this.postService.getPosts();
  }

}
