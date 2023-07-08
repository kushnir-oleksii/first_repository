import { Component } from '@angular/core';
import { GroupService } from '../service/group.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  newGroupName = '';

  constructor(public groupService: GroupService) {}

  editGroupName() {
    if (this.newGroupName.trim() !== '') {
      this.groupService.setGroupName(this.newGroupName);
    }
  }
}
