import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderListComponent } from './order-list/order-list.component';
import { SharedModule } from '../../shared/shared.module';
import { OrderManagemenRoutingModule } from './order-management-routing.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { OrderDetailComponent } from './order-detail/order-detail.component';

@NgModule({
  imports: [
    CommonModule,
    OrderManagemenRoutingModule,
    SharedModule,
    Ng2SmartTableModule
  ],
  declarations: [OrderListComponent, OrderDetailComponent]
})
export class OrderManagementModule { }
