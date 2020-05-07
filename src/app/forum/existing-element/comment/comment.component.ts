import { Component, OnInit, Input } from '@angular/core';
import { Comment } from '../../model/comment.model';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.sass']
})
export class CommentComponent implements OnInit {

  @Input("comment") comment: Comment;

  constructor() { }

  ngOnInit(): void {
  }

}
