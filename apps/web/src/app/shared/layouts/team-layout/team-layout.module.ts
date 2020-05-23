import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CoreModule } from '../../../core/core.module';
import { SharedModule } from '../../shared.module';

import { SidenavComponent } from './navigation/sidenav/sidenav.component';
import { FooterComponent } from './navigation/footer/footer.component';
import { IconMenuComponent } from './navigation/icon-menu/icon-menu.component';
import { SearchComponent } from './navigation/search/search.component';
import { TeamLayoutComponent } from './team-layout.component';
import { NgxSpinnerModule } from 'ngx-spinner';


@NgModule({
  declarations: [
    TeamLayoutComponent,
    IconMenuComponent,
    SearchComponent,
    SidenavComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    CoreModule,
    SharedModule,
    RouterModule,
    NgxSpinnerModule
  ]
})

export class TeamLayoutModule { }
