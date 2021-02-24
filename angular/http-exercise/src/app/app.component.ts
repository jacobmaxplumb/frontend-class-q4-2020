import { Component, OnInit } from '@angular/core';
import { BlogService } from './blog.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private blogService: BlogService) { }

  title = 'http-exercise';

  ngOnInit() {
    this.blogService.getPosts().subscribe((data: any) => {
      console.log(data);
      console.log(data.title);
      console.log(data.language);
      console.log(data.posts.length);
      console.log(data.posts[0].title);
      data.posts.forEach((post: any) => {
        console.log(post.title);
        post.tags.forEach((tag: any) => console.log(tag));
      })
    })
  }

  addPost() {
    this.blogService.addPost('title 1', 'author 1').subscribe(() => {
      console.log('post was saved');
    })
  }

  updatePost() {
    this.blogService.updatePost('updated title', 'updated author', 1).subscribe((data: any) => {
      console.log(data);
    })
  }

  deletePost() {
    this.blogService.deletePost(1).subscribe(() => {
      console.log('delete post with id of 1');
    })
  }
}
