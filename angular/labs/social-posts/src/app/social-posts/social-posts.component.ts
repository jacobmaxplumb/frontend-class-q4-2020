import { Component, OnInit } from '@angular/core';
import { Post } from '../post';

@Component({
  selector: 'app-social-posts',
  templateUrl: './social-posts.component.html',
  styleUrls: ['./social-posts.component.css']
})
export class SocialPostsComponent implements OnInit {

  posts: Post[] = [
    {title: 'test', thought: 'test thought'}
  ];
  
  showPostForm: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(post: Post) {
    this.posts.push(post);
    this.showPostForm = false;
  }

  onDelete(i: number) {
    this.posts.splice(i, 1);
  }

}
