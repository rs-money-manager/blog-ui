import { Component, OnInit } from '@angular/core';
import { MarkdownModule } from 'ngx-markdown';
import { PostServiceService } from '../api-service/post-service.service';
import { Post, PostView } from '../api-service/post.model';
import { Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { NgIf } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-post',
  standalone: true,
  templateUrl: './post.component.html',
  styleUrl: './post.component.css',
  imports: [MarkdownModule, HttpClientModule, NgIf]
})
export class PostComponent implements OnInit {

  markdownContent: PostView = {
    title: "",
    content: "",
    date: "",
    description: ""
  };
  posts: Post[] = [];
  postSub!: Subscription;


  constructor(private postService: PostServiceService,
              private httpClient: HttpClient,
              private route: ActivatedRoute,
              private router: Router) {}

  ngOnInit(): void {
    // Getting Parameter value
    this.posts = this.postService.getPosts();
    let id = this.route.snapshot.paramMap.get('id');
    let index = id != null ? parseInt(id) : -1;

    // Redirecting
    if(index == -1 || index > this.posts.length){
      this.router.navigate(['/blog']);
      return;
    }

    // Reading content from md file
    this.readFileContent(this.posts[index]);

    // Dynamic rendering of json values
    this.postSub = this.postService.dynamicPosts.subscribe((posts: Post[]) => {
      this.posts=posts;
      this.readFileContent(this.posts[0]);
    });
  }

  ngOnDestroy(): void {
    this.postSub?.unsubscribe();
  }

  // Reading content from md file
  readFileContent(post: Post): void {
    this.httpClient.get(post.fileLocation, { responseType: 'text' })
      .subscribe((data: string) => {
        this.markdownContent.content = data;
        this.markdownContent.date = post.date;
        this.markdownContent.title = post.title;
      });
  }

}
