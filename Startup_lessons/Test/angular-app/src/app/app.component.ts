import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  developers = [
    {name: "Mike", status: "Frontend", url: "https://i.pravatar.cc/150?img=12",},
    {name: "Nikola", status: "Backend", url: "https://i.pravatar.cc/150?img=7",},
    {name: "Anna ", status: "Design", url: "https://i.pravatar.cc/150?img=1",},
];
}
