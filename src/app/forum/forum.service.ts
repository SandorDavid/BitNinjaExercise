import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from './post/post.model';
import { environment } from 'src/environments/environment';


@Injectable({
    providedIn: 'root'
})
export class ForumService {

    private readonly FORUM_API_SUFFIX = "/posts"

    constructor(private http: HttpClient){}

    fetchPosts$(): Observable<Array<Post>> {
        return this.http.get<Array<Post>>(environment.API_BASE_URL + this.FORUM_API_SUFFIX);
    }

    fetchCommentsForPost$(postId: number): Observable<Array<Comment>> {
        return this.http.get<Array<Comment>>(environment.API_BASE_URL + this.FORUM_API_SUFFIX + "/${postId}/comments");
    }

    saveNewPost(post: Post): void {
        this.http.post(environment.API_BASE_URL + this.FORUM_API_SUFFIX, post);
    }
    
}