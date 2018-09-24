import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MegaGridComponent } from './megagrid/megagrid.component';
import { ColumnComponent } from './megagrid/components/column/column.component';
import { CellComponent } from './megagrid/components/cell/cell.component';
import { ColumnHeaderComponent } from './megagrid/components/column-header/column-header.component';
import { TableRowComponent } from './megagrid/components/table-row/table-row.component';

@NgModule({
  declarations: [
    AppComponent,
    MegaGridComponent,
    ColumnComponent,
    CellComponent,
    ColumnHeaderComponent,
    TableRowComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
