import { Component, OnInit, Input } from '@angular/core';
import { Post } from './post.model';
import { Observable } from 'rxjs';
import { ForumService } from '../forum.service';
import { stopLoadingIndicator } from '@btapai/ng-loading-indicator';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.sass']
})
export class PostComponent implements OnInit {

  @Input() post: Post;
  comments: Comment[];

  constructor(private forumService: ForumService) { }

  ngOnInit(): void {
  }

  getComments(): Comment[] {
    if (!this.comments)
      this.forumService.fetchCommentsForPost(this.post.id).then(comments => this.setComments(comments));

    return this.comments;
  }

  @stopLoadingIndicator
  setComments(comments: Comment[]){
    this.comments = comments;
  }

}
