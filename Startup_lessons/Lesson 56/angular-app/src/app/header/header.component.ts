import { Component } from '@angular/core';
import { GroupService } from '../service/group.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  newGroupName = '';

  constructor(private groupService: GroupService) {}

  get groupName(): string {
    return this.groupService.getGroupName();
  }

  editGroupName() {
    if (this.newGroupName.trim() !== '') {
      this.groupService.setGroupName(this.newGroupName);
      this.newGroupName = '';
    }
  }
}
