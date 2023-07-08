import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.scss']
})
export class PopUpComponent {
  @Input() groupName = '';
  @Input() members = 0;
  @Output() close = new EventEmitter();
}
