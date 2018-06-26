import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from '../shared/components/not-found/not-found.component';
import { PagesComponent } from './pages.component';

const routes: Routes = [{
    path: '',
    component: PagesComponent,
    children: [{
        path: 'user-management',
        loadChildren: './user-management/user-management.module#UserManagementModule',
    }, {
        path: 'order-management',
        loadChildren: './order-management/order-management.module#OrderManagementModule',
    }, {
        path: 'product-management',
        loadChildren: './product-management/product-management.module#ProductManagementModule',
    }, {
        path: '**',
        component: NotFoundComponent,
    }
    ],
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class PagesRoutingModule {
}
