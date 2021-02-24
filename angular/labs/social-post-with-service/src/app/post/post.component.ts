import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../post';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input() post: Post = {title: '', thought: ''};
  @Input() index: number = 0;

  constructor(private postService: PostService) { }

  ngOnInit(): void {
  }

  onDelete() {
    this.postService.posts.splice(this.index, 1);
  }

}
