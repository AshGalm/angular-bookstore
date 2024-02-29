import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookRoutingModule } from './books/book.routing.module';
import { HomeRoutingModule } from './home.routing.module';
import { SettingComponent } from './setting/setting.component';
import { SettingModule } from './setting/setting.module';
import { SettingRoutingModule } from './setting/setting.routing.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HomeRoutingModule,
    BookRoutingModule,
    SettingRoutingModule
  ]
})
export class HomeModule { }
