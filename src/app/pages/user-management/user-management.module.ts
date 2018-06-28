import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserManagementRoutingModule } from './user-management-routing.module'
import { UserListComponent } from './user-list/user-list.component';

import { SharedModule } from '../../shared/shared.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';


@NgModule({
  imports: [
    CommonModule,
    UserManagementRoutingModule,
    SharedModule,
    Ng2SmartTableModule
  ],
  declarations: [UserDetailsComponent, UserListComponent]
})
export class UserManagementModule { }
