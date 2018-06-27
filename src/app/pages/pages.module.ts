import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './page-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    PagesRoutingModule,
    SharedModule
  ],
  declarations: [PagesComponent]
})
export class PagesModule { }
