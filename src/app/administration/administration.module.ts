import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdministrationRoutingModule } from './administration-routing.module';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { AdminCategoriesComponent } from './admin-categories/admin-categories.component';
import { AdminBooksComponent } from './admin-books/admin-books.component';
import { AdminAuthorsComponent } from './admin-authors/admin-authors.component';
import { AdminSidebarComponent } from './admin-layout/admin-sidebar/admin-sidebar.component';
import { AdminHeaderComponent } from './admin-layout/admin-header/admin-header.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { SharedModule } from '../@shared/@shared.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AdminDashboardComponent,
    AdminPanelComponent,
    AdminCategoriesComponent,
    AdminBooksComponent,
    AdminAuthorsComponent,
    AdminSidebarComponent,
    AdminHeaderComponent,
    AdminLoginComponent
  ],
  imports: [
    CommonModule,
    AdministrationRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class AdministrationModule { }
