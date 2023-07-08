import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class GroupService {
    
  private groupNameSubject = new BehaviorSubject<string>('Healthy lifestyle');
  groupName$ = this.groupNameSubject.asObservable();

  getGroupName(): string | null {
    return this.groupNameSubject.getValue();
  }

  setGroupName(newGroupName: string): void {
    this.groupNameSubject.next(newGroupName);
  }
}
