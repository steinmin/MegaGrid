import * as _ from 'underscore';
import { from } from 'rxjs';
import {MegaColumn} from './MegaColumn';
import {DragDropMode} from './Enums';
import {U} from '../utilities/U';
import {MegaGrid} from './MegaGrid';

export class  MegaLayout {
  public RootGrid: MegaGrid;
  public Id: number;
  public Guid: string;
  public DragDropMode: DragDropMode;
  public ShowRowSeparator = true;
  public ShowColumnSeparator = true;
  public SeparatorBorder = 'solid 1px black';
  public ShowInsertRow = false;
  public InfoRowColumnId = -1;
  public SynchronizeParentChildCheckBoxes = true;
  public AllowColumnsReordering = true;
  public ColumnsOrder: number[] = [];
  public SortOrder: number[] = [];
  public Grouping: number[] = [];

  private _isEditable = false;
  public get IsEditable(): boolean {
    return this._isEditable;
  }
  public set IsEditable(isEditable: boolean) {
    this._isEditable = isEditable;
  }

  private _columns: MegaColumn[] = null;
  public get Columns(): MegaColumn[] {
    return this._columns;
  }
  public set Columns(columns: MegaColumn[]) {
    this._columns = U.notNullOrUndefined(columns) ? columns : [];
    from<MegaColumn>(this._columns).subscribe(col => col.ParentLayout = this);
    this.ColumnOrder = _.range(this._columns.length);
  }

  private _columnOrder: number[] = null;
  public get ColumnOrder(): number[] {
    return this._columnOrder;
  }
  public set ColumnOrder(columnOrder: number[]) {
    this._columnOrder = columnOrder;
  }

  private _showColumnHeader = true;
  public get ShowColumnHeader(): boolean {
    return this._showColumnHeader;
  }
  public set ShowColumnHeader(showColumnHeader: boolean) {
    this._showColumnHeader = showColumnHeader;
  }

  private _allowSortColumnsCount: number;
  public get AllowSortColumnsCount(): number {
    return this._allowSortColumnsCount;
  }
  public set AllowSortColumnsCount(count: number) {
    this._allowSortColumnsCount = count;
  }

  private _allowColumnWidthChanging: boolean;
  public get AllowColumnWidthChanging(): boolean {
    return this._allowColumnWidthChanging;
  }
  public set AllowColumnWidthChanging(allow: boolean) {
    this._allowColumnWidthChanging = allow;
  }

  private _reservedWidth: number;
  public get ReservedWidth(): number {
    return this._reservedWidth;
  }
  public set ReservedWidth(width: number) {
    this._reservedWidth = width;
  }

  public HasFilter(): boolean {
    return this.Columns.filter((col) => {
      return false;
    }).length > 0;
  }

  public GetColumnById(columnId: number): MegaColumn {
    const index = this.GetColumnIndexById(columnId);
    if (this.Columns != null && index >= 0 && index < this.Columns.length) {
      return this.Columns[index];
    }
    return null;
  }

  public GetColumnIndexById(columnId: number): number {
    if (this.Columns) {
      for ( let i = 0; i < this.Columns.length; i++) {
        if (this.Columns[i].Id === columnId) {
          return i;
        }
      }
    }
    return -1;
  }
}
