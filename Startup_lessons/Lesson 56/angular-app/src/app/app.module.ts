import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { HeaderComponent } from './header/header.component';
import { UsersService } from './service/users.service';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [UsersService], // Добавьте UsersService в раздел providers
  bootstrap: [AppComponent]
})
export class AppModule { }
