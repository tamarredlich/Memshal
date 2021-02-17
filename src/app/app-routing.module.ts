//Modules
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//components
import { UsersComponent } from './components/users/users.component';
import { PostsUserComponent } from './components/posts-user/posts-user.component';
import { CommentsPostComponent } from './components/comments-post/comments-post.component';


const routes: Routes = [
  { path: '', redirectTo: 'users', pathMatch: 'full' },
  {path: 'users', component: UsersComponent,children: [
    {path: '', redirectTo: 'posts-user', pathMatch: 'full'},
    {path: 'posts-user', component: PostsUserComponent,children:[
      {path: 'comments-post', component: CommentsPostComponent}
    ]}
  ]},
  {path: 'posts-user', component: PostsUserComponent}

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
