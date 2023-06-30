import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss']
})
export class AddPostComponent {

  @Output() onPost = new EventEmitter();
  
  nameInputValue = '';
  statusInputValue = '';
  avatarInputValue = '';

  onName(event: any) {
    this.nameInputValue = event.target.value;
  }

  onStatus(event: any) {
    // Ограничение длины ввода до 50 символов
    this.statusInputValue = event.target.value.slice(0, 50);
  }

  onAvatar(event: any) {
    this.avatarInputValue = event.target.value;
  }

  addNewPost() {
    const value = {
      name: this.nameInputValue,
      status: this.statusInputValue,
      avatar: this.avatarInputValue,
    };
    this.onPost.emit(value);
    this.resetForm();
  }

  resetForm() {
    this.nameInputValue = '';
    this.statusInputValue = '';
    this.avatarInputValue = '';
  }
}
