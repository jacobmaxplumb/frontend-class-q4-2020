import { Component, OnInit } from '@angular/core';
import { Post } from '../post';
import { PostService } from '../post.service';

@Component({
  selector: 'app-social-posts',
  templateUrl: './social-posts.component.html',
  styleUrls: ['./social-posts.component.css']
})
export class SocialPostsComponent implements OnInit {

  get posts(): Post[] {
    return this.postService.posts;
  }

  get showPostForm(): boolean {
    return this.postService.showPostForm;
  }

  updateShowPostForm() {
    this.postService.showPostForm = !this.postService.showPostForm;
  }

  constructor(private postService: PostService) { }

  ngOnInit(): void {
  }

}
