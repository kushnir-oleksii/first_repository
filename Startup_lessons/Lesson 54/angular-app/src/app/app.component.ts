import { Component, DoCheck, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, DoCheck {
  post = {name: "", status: "", avatar: ""};
  addPost(newPost: any){    
    this.post.name = newPost.name
    this.post.status = newPost.status
    this.post.avatar = newPost.avatar
  }

  charsetAmount = 0;
  ngOnInit(){
    this.charsetAmount = this.post.status.length  
  }
  ngDoCheck() {
    this.charsetAmount = this.post.status.length
  }
  resetPostData() {
    this.post.name = '';
    this.post.status = '';
    this.post.avatar = '';
  }
}
