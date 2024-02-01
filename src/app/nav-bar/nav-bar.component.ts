import { Component } from '@angular/core';
import { BlogListsComponent } from '../blog-lists/blog-lists.component';
import { PostComponent } from '../post/post.component';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [BlogListsComponent, PostComponent],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {

}
