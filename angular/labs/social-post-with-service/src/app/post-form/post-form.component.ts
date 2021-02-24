import { Component, OnInit } from '@angular/core';
import { Post } from '../post';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {

  post: Post = {title: '', thought: ''};

  constructor(private postService: PostService) { }

  ngOnInit(): void {
  }

  submitPost() {
    this.postService.posts.push(this.post);
    this.postService.showPostForm = false;
  }

}
