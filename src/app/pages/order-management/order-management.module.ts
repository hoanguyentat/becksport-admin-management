import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderListComponent } from './order-list/order-list.component';
import { SharedModule } from '../../shared/shared.module';
import { OrderManagemenRoutingtModule } from './order-management-routing.module';

@NgModule({
  imports: [
    CommonModule,
    OrderManagemenRoutingtModule,
    SharedModule
  ],
  declarations: [OrderListComponent]
})
export class OrderManagementModule { }
