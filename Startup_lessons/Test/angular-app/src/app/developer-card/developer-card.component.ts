import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-developer-card',
  templateUrl: './developer-card.component.html',
  styleUrls: ['./developer-card.component.scss']
})
export class DeveloperCardComponent {
  @Input() name = ''
  @Input() status = ''
  @Input() img = ''
}
