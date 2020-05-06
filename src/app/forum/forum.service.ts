import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from './post/post.model';
import { environment } from 'src/environments/environment';
import { startLoadingIndicator } from '@btapai/ng-loading-indicator';


@Injectable({
    providedIn: 'root'
})
export class ForumService {

    private readonly FORUM_API_SUFFIX = "/posts"

    constructor(private http: HttpClient){}

    fetchPosts(): Promise<Post[]> {
        return this.http.get<Post[]>(environment.API_BASE_URL + this.FORUM_API_SUFFIX).toPromise();
    }

    @startLoadingIndicator
    fetchCommentsForPost(postId: number): Promise<Comment[]> {
        return this.http.get<Comment[]>(environment.API_BASE_URL + this.FORUM_API_SUFFIX + `/${postId}/comments`).toPromise();
    }

    saveNewPost(post: Post): void {
        this.http.post(environment.API_BASE_URL + this.FORUM_API_SUFFIX, post);
    }
    
}