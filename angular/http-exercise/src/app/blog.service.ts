import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  apiUrl: string = 'https://grandcircusco.github.io/demo-apis/blog-posts.json';
  apiPostUrl: string = 'http://localhost:3000/posts';

  constructor(private http: HttpClient) { }

  getPosts() {
    return this.http.get(this.apiUrl);
  }

  addPost(title: string, author: string) {
    return this.http.post(this.apiPostUrl, {title: title, author: author});
  }

  updatePost(title: string, author: string, id: number) {
    return this.http.put(`${this.apiPostUrl}/${id}`, {title: title, author: author});
  }

  deletePost(id: number) {
    return this.http.delete(`${this.apiPostUrl}/${id}`);
  }
}
