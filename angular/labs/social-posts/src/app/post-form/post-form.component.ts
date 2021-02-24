import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Post } from '../post';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {

  post: Post = {title: '', thought: ''}
  @Output() submitted = new EventEmitter<Post>();

  constructor() { }

  ngOnInit(): void {
  }

  submitPost() {
    this.submitted.emit(this.post);
  }

}
