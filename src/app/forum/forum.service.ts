import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { startLoadingIndicator } from '@btapai/ng-loading-indicator';
import { Post } from './model/post.model';


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

    saveNewPost(post: Post): Promise<Post> {
        return this.http.post<any>(environment.API_BASE_URL + this.FORUM_API_SUFFIX, post).toPromise();
    }
    
}