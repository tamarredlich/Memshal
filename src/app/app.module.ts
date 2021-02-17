import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//modules
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
//components
import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/users.component';
//service
import { ApiService } from './services/api/api.service';
import { UserService } from './services/user/user.service';
import { PostsUserComponent } from './components/posts-user/posts-user.component';
import { CommentsPostComponent } from './components/comments-post/comments-post.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';


@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    PostsUserComponent,
    CommentsPostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
    ,HttpClientModule, BrowserAnimationsModule
    ,MatTableModule
  ],
  providers: [ApiService,
    UserService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
