import { Component, Input } from '@angular/core';
import { GroupService } from '../service/group.service';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  @Input() name = '';
  @Input() status = '';
  @Input() img = '';
  @Input() groupName = '';

  newUserName = '';
  newUserStatus = '';

  constructor(public groupService: GroupService) {}

  editGroupName(newGroupName: string) {
    if (newGroupName.trim() !== '') {
      this.groupService.setGroupName(newGroupName);
    }
  }

  editName() {
    if (this.newUserName.trim() !== '') {
      this.name = this.newUserName;
    }
  }

  editStatus() {
    if (this.newUserStatus.trim() !== '') {
      this.status = this.newUserStatus;
    }
  }
}
