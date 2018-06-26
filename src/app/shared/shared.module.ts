import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { NbSidebarModule, NbMenuModule, NbActionsModule, NbCardModule, NbLayoutModule, NbTabsetModule, NbRouteTabsetModule, NbUserModule, NbSearchModule, NbCheckboxModule, NbPopoverModule, NbContextMenuModule, NbProgressBarModule } from '@nebular/theme';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


const BASE_MODULES = [CommonModule, FormsModule, ReactiveFormsModule];

const NB_MODULES = [
  NbCardModule,
  NbLayoutModule,
  NbTabsetModule,
  NbRouteTabsetModule,
  NbMenuModule,
  NbUserModule,
  NbActionsModule,
  NbSearchModule,
  NbSidebarModule,
  NbCheckboxModule,
  NbPopoverModule,
  NbContextMenuModule,
  // NgbModule,
  // NbSecurityModule, // *nbIsGranted directive
];

const COMPONENTS = [HeaderComponent, SidebarComponent, NotFoundComponent];


@NgModule({
  imports: [
    ...BASE_MODULES,
    ...NB_MODULES
  ],
  exports: [
    ...BASE_MODULES,
    ...NB_MODULES,
    ...COMPONENTS
  ],
  declarations: [...COMPONENTS]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders>{
      ngModule: SharedModule,
      providers: [
        ...NbSidebarModule.forRoot().providers,
        ...NbMenuModule.forRoot().providers,
      ],
    };
  }
}
