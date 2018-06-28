import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { NotFoundComponent } from "../../shared/components/not-found/not-found.component";
import { UserDetailsComponent } from "./user-details/user-details.component";
import {UserListComponent} from "./user-list/user-list.component";

const routes: Routes = [
    {
        path: '',
        component: UserListComponent
    }, {
        path: ':id',
        component: UserDetailsComponent
    }, {
        path: '**',
        component: NotFoundComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class UserManagementRoutingModule {
}