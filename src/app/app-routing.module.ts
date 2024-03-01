import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { CommonModule } from '@angular/common';
import { NotfindComponent } from './notfind/notfind.component';
import { LoginComponent } from './login/login.component';
import { loginGuard } from './login.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },

  {
    path:'login',
  component:LoginComponent,
},

  {
    path:'home',
  loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
  canActivate: [loginGuard],

},


  {path:'**',pathMatch:'full', component: NotfindComponent}
];


@NgModule({
  // , { enableTracing: true }
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
