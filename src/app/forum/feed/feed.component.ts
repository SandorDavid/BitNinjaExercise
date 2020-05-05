import { Component, OnInit } from '@angular/core';
import { Post } from '../post/post.model';
import { Observable } from 'rxjs';
import { ForumService } from '../forum.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.sass']
})
export class FeedComponent implements OnInit {

  posts$: Observable<Array<Post>>;

  constructor(private forumService: ForumService) { }

  ngOnInit(): void {
    this.posts$ = this.forumService.fetchPosts$();
  }
}
