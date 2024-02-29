import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewComponent } from './view.component';

const ViewRoutes: Routes = [
  {
    path: '',
    component: ViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(ViewRoutes)],
  exports: [RouterModule]
})
export class ViewRoutingModule { }
