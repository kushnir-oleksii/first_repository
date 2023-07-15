import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GroupService {
  private groupName = 'Healthy lifestyle';

  getGroupName(): string {
    return this.groupName;
  }

  setGroupName(newGroupName: string): void {
    this.groupName = newGroupName;
  }
}
