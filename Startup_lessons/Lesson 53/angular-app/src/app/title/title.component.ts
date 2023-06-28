import { Component } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styles: [`
  .title{
    font-size: 25px;
    text-transform: uppercase;
    letter-spacing: 2px;
    padding: 10px;
    with: fit-content;
    color: #fff;
    text-align: center;
  }
  `]
})
export class TitleComponent {
  title = "main title"
}
