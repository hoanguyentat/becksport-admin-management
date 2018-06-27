import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderListComponent } from './order-list/order-list.component';
import { SharedModule } from '../../shared/shared.module';
import { OrderManagemenRoutingtModule } from './order-management-routing.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';

@NgModule({
  imports: [
    CommonModule,
    OrderManagemenRoutingtModule,
    SharedModule,
    Ng2SmartTableModule
  ],
  declarations: [OrderListComponent]
})
export class OrderManagementModule { }
