import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingComponent } from './setting.component';
import { ViewComponent } from './view/view.component';
import { ViewRoutingModule } from './view/view-routing.module';
import { SettingRoutingModule } from './setting.routing.module';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    SettingRoutingModule,
  ]
})
export class SettingModule { }
