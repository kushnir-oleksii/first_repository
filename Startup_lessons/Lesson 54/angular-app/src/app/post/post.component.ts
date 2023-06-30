
import { Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})

export class PostComponent {
  @Input() name = ''
  @Input() status = ''
  @Input() avatar = ''
  @Input() charsetAmount = 0;
  @Output() removeUser = new EventEmitter();
  onRemoveUser() {
    this.removeUser.emit();
  }
}