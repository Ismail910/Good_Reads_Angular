import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {path:'',loadChildren:()=>import('./users/users.module').then(m=>m.UsersModule)},
  {path:'Admin',loadChildren:()=>
  import('./administration/administration.module').
  then(m=>m.AdministrationModule)
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
