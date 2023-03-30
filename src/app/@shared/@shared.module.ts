import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PaginationComponent } from './components/pagination/pagination.component';
import { SearchFilterPipe } from './pipes/search-filter.pipe';
import { SearchComponent } from './components/search/search.component';

import { FormsModule } from '@angular/forms';
@NgModule
(
  {
    declarations:[
    PaginationComponent,
    SearchFilterPipe,
    SearchComponent
  ],
    imports:[CommonModule,FormsModule],
    exports:[
      PaginationComponent,
      SearchFilterPipe,
      SearchComponent
    ]
  }
)

export class SharedModule{}
