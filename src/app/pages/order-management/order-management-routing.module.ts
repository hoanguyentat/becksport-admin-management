import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { NotFoundComponent } from "../../shared/components/not-found/not-found.component";
import { OrderListComponent } from "./order-list/order-list.component";
import { OrderDetailComponent } from "./order-detail/order-detail.component";

const routes: Routes = [
    {
        path: '',
        component: OrderListComponent,
    }, {
        path: 'list',
        component: OrderListComponent
    }, {
        path: 'order-detail/:id',
        component: OrderDetailComponent
    }, {
        path: '**',
        component: NotFoundComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class OrderManagemenRoutingModule {
}