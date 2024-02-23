import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingRoutingModule } from './setting-routing.module';
import { SettingComponent } from './setting.component';
import { ViewComponent } from './view/view.component';
import { ViewRoutingModule } from './view/view-routing.module';


@NgModule({
  declarations: [
    SettingComponent,
    ViewComponent
  ],
  imports: [
    CommonModule,
    SettingRoutingModule,
    ViewRoutingModule
  ]
})
export class SettingModule { }
