import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostComponent } from './post/post.component';
import { CommentComponent } from './comment/comment.component';
import { FeedComponent } from './feed/feed.component';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [PostComponent, CommentComponent, FeedComponent],
  imports: [
    CommonModule,
    FlexLayoutModule
  ],
  exports: [FeedComponent]
})
export class ForumModule { }
