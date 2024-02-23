import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewComponent } from './view/view.component';
import { SettingComponent } from './setting.component';

const routes: Routes = [

  {
    "path": "",
    component: SettingComponent,
    // children: [
    //   {
    //     path: "view",
    //     component: ViewComponent
    //   }
    // ]
    },

  // {
  //   path:'view',
  //   component: ViewComponent
  // }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingRoutingModule { }
