import { Component, OnInit, Input } from '@angular/core';
import { Post } from './post.model';
import { Observable } from 'rxjs';
import { ForumService } from '../forum.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.sass']
})
export class PostComponent implements OnInit {

  @Input() postData: Post;
  comments$: Observable<Array<Comment>>;

  constructor(private forumService: ForumService) { }

  ngOnInit(): void {
  }

  // this.posts$ = this.forumService.fetchPosts$();

}
