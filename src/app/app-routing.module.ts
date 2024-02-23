import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home/home.component';
import { BookComponent } from './home/books/book/book.component';
import { NotfindComponent } from './notfind/notfind.component';
import { LoginComponent } from './login/login.component';
import { SettingComponent } from './setting/setting.component';
import { ShowBooksComponent } from './home/show-books/show-books.component';
import { BookDetailsComponent } from './home/book-details/book-details.component';

const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: 'auth',
  //   pathMatch: 'full'
  // },
  // {
  //   "path": "auth",
  //   "loadChildren": () => import("./auth/auth.module").then(m => m.AuthModule)
  // },
  {path:'login', component:LoginComponent},
  {path:'',component:HomeComponent},
  {
    path:'books',component:ShowBooksComponent,
},
{path:'details/:id',component:BookDetailsComponent},

  {path:'setting',
  loadChildren: () => import('./setting/setting.module').then(m => m.SettingModule)
},

  {path:'**',pathMatch:'full', component: NotfindComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
