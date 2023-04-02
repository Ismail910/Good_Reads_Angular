import { PopularComponent } from './users/home/popular/popular.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './users/home/home/HomeComponent.1';
const routes: Routes = [

  {path:'',loadChildren:()=>import('./users/users.module').then(m=>m.UsersModule)},
  {path:'Admin',loadChildren:()=>
  import('./administration/administration.module').
  then(m=>m.AdministrationModule)
  },
  {path:'home', component:PopularComponent},

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
