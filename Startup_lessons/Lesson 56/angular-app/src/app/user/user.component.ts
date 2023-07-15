import { Component, Input } from '@angular/core';
import { GroupService } from '../service/group.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  @Input() name = ''
  @Input() status = ''
  @Input() img = ''
  constructor(private groupService: GroupService) {}

  get groupName(): string {
    return this.groupService.getGroupName();
  }

}
