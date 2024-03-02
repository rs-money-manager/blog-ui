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
  styleUrl: './blog-lists.component.css',
})
export class BlogListsComponent implements OnInit {

  posts: Post[] = [];
  distinctType: { [key: string]: number; } = {};

  constructor(private postService: PostServiceService) {}

  ngOnInit(): void {
    this.posts = this.postService.getPosts();
    this.distinctType = this.countDistinctValues(this.posts, "type");
    console.log(this.distinctType);
  }

  getObjectKeys(obj: any): string[] {
    return Object.keys(obj);
  }

  countDistinctValues(jsonArray: any, key: string): { [key: string]: number } {
    const distinctValuesCount: { [key: string]: number } = {};
  
    // Iterate through each object in the array
    for (const obj of jsonArray) {
      // Get the value corresponding to the specified key
      const value = obj[key];
  
      // Increment the count for the value
      distinctValuesCount[value] = (distinctValuesCount[value] || 0) + 1;
    }
  
    return distinctValuesCount;
  }

}
