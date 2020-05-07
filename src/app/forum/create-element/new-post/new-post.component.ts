import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ForumService } from '../../forum.service';
import { Post } from '../../model/post.model';
import { startLoadingIndicator, stopLoadingIndicator } from '@btapai/ng-loading-indicator';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.sass']
})
export class NewPostComponent implements OnInit {

  @Output() newPostPosted: EventEmitter<any> = new EventEmitter();

  constructor(private forumService: ForumService) { }

  ngOnInit(): void {
  }

  @startLoadingIndicator
  onSubmit(f: NgForm): void{
    this.forumService.saveNewPost(f.value as Post)
      .then((post: Post) => this.handleNewPost(f, post));
  }

  @stopLoadingIndicator
  handleNewPost(f: NgForm, post: Post) {
    f.resetForm();
    this.newPostPosted.emit(post);
  }

}
