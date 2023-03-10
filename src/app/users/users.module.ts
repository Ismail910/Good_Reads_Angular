import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UserHeaderComponent } from './user-layout/user-header/user-header.component';
import { UserFooterComponent } from './user-layout/user-footer/user-footer.component';


@NgModule({
  declarations: [
    UserHeaderComponent,
    UserFooterComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule
  ]
})
export class UsersModule { }
