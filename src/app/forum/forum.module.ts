import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedComponent } from './existing-element/feed/feed.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import { CommentComponent } from './existing-element/comment/comment.component';
import { PostComponent } from './existing-element/post/post.component';
import { NewPostComponent } from './create-element/new-post/new-post.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';


@NgModule({
  declarations: [PostComponent, CommentComponent, FeedComponent, NewPostComponent],
  imports: [
    CommonModule,
    FormsModule,
    FlexLayoutModule,
    MatExpansionModule,
    MatButtonToggleModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule
  ],
  exports: [FeedComponent]
})
export class ForumModule { }
