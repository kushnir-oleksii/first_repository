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
  onName(event: any){
    this.nameInputValue = event.target.value;
  }
  onStatus(event: any) {
    this.statusInputValue = event.target.value.slice(0, 50);//slice прибирає имволи коли більше 50 
  }
  onAvatar(event: any){
    this.avatarInputValue = event.target.value;
  }

  addNewPost(nameValue: string, statusValue: string, avatarValue: string ) {
    const value = {
      name: nameValue,
      status: statusValue,
      avatar: avatarValue,
    }
    this.onPost.emit(value)
    this.nameInputValue = '';
    this.statusInputValue = '';
    this.avatarInputValue = '';
};
resetForm() {
  this.nameInputValue = '';
  this.statusInputValue = '';
  this.avatarInputValue = '';
};

}

