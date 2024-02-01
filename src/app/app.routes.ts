import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostComponent } from './post/post.component';
import { BlogListsComponent } from './blog-lists/blog-lists.component';
import { postResolverResolver } from './api-service/post-resolver.resolver';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/blog',
    pathMatch: 'full',
  },
  {
    path: 'blog',
    component: BlogListsComponent,
    resolve: [postResolverResolver]
  },
  {
    path: 'post/:id',
    component: PostComponent,
    resolve: [postResolverResolver]
  },
  {
    path: '**',
    redirectTo: '/blog'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
