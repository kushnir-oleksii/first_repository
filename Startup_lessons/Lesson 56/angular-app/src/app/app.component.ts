import { Component, ViewChild, ViewContainerRef, ComponentRef } from '@angular/core';
import { UsersService } from '../app/service/users.service';
import { PopUpComponent } from './pop-up/pop-up.component';
import { GroupService } from '../app/service/group.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [UsersService],
})
export class AppComponent {
  constructor(
    public usersService: UsersService,
    public groupService: GroupService
  ) {}

  updateGroupName(newGroupName: string) {
    this.groupService.setGroupName(newGroupName);
  }

  @ViewChild('popUp', { read: ViewContainerRef })
  private viewRef!: ViewContainerRef;
  private componentRef!: ComponentRef<PopUpComponent>;

  showPopUp() {
    this.componentRef = this.viewRef.createComponent(PopUpComponent);
    this.componentRef.instance.close.subscribe(() => {
      this.viewRef.clear();
    });
  }
}
