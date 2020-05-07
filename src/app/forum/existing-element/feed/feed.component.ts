import { Component, OnInit } from '@angular/core';
import { ForumService } from '../../forum.service';
import { MatButtonToggleChange } from '@angular/material/button-toggle';
import { Post } from '../../model/post.model';
import { trigger, transition, style, animate, state } from '@angular/animations';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.sass'],
  animations: [
    trigger('inOut', [
      state('true', style({opacity:'1', visibility: 'visible'})),
      state('false', style({opacity:'0', visibility: 'hidden'})),
      transition('0 => 1', [
        animate('800ms ease-in')
      ]),
      transition('1 => 0', [
        animate('300ms ease-in')
      ])
    ])
  ]
})
export class FeedComponent implements OnInit {

  posts: Post[];

  paginationSizes: string[] = ["10", "25", "All"];
  currentPagination: string = this.paginationSizes[0];
  currentPageNumber: number = 0;
  newPost: boolean = false;

  constructor(private forumService: ForumService) { }

  ngOnInit(): void {
    this.forumService.fetchPosts()
      .then(posts => {
        this.posts = posts;
        this.posts.reverse();
      });
  }

  getPaginatedPosts(): Post[] {
    if (!this.posts || isNaN(+this.currentPagination))
      return this.posts;

    return this.posts.slice(
        this.currentPageNumber * +this.currentPagination, 
        (this.currentPageNumber + 1) * +this.currentPagination
      );
  }

  paginationChanged($event: MatButtonToggleChange): void {
    this.currentPagination = $event.value;
    this.currentPageNumber = 0;
  }

  pageExists(prospectivePageNumber: number): boolean {
    if (!this.posts || isNaN(+this.currentPagination) || prospectivePageNumber < 0)
      return false;
    return prospectivePageNumber * +this.currentPagination < this.posts.length;
  }

  movePage(prospectivePageNumber: number): void {
    if (this.pageExists(prospectivePageNumber))
      this.currentPageNumber = prospectivePageNumber;
  }

  addPost(post: Post): void {
    this.posts.unshift(post);
    this.newPost = false;
  }

}
