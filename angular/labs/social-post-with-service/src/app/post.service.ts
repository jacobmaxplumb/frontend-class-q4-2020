import { Injectable } from '@angular/core';
import { Post } from './post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  posts: Post[] = [
    {title: 'test', thought: 'test thought'}
  ]
  
  showPostForm: boolean = false;

  constructor() { }
}
