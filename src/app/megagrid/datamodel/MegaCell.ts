import {MegaLayout} from './MegaLayout';
import {IGridElement} from './IGridElement';
import {MegaCollection} from './MegaCollection';
import {MegaGrid} from './MegaGrid';
import {MegaRowBase} from './MegaRowBase';
import {U} from '../utilities/U';
import {MegaColumn} from './MegaColumn';
import {MegaRow} from './MegaRow';
import {ColumnType} from './Enums';

export class MegaCell implements IGridElement {
  private _parent: IGridElement;

  Column: MegaColumn = null;
  Data: any = null;
  Icon: any = null; // Sets or returns the icon of the cell, if OtColumnDefinition.CellsCanHaveIcons
  Tooltip = '';
  IsSelected = false;
  IsFocused = false;
  Background = '';
  Tag: any;

  constructor(row: MegaRow, column: MegaColumn) {
    this.setParent(row);
    this.Column = column;
    if (column.ColumnType !== ColumnType.Normal) {
      return;
    }

    this.Data = row.Data[column.FieldName];
    if (U.notNullOrUndefined(column.FieldIconUrl)) {
      this.Icon = row.Data[column.FieldIconUrl];
    }
  }

  get Row(): MegaRow {
    return this.getParent() as MegaRow;
  }

  showCellSeperator(): boolean {
    if (!this.Column.ParentLayout.ShowColumnSeparator) {
      return false;
    }
    return this.Column.Id !== this.Column.ParentLayout.ColumnOrder[0];
  }

  getDataCollection(): MegaCollection {
    return this.getParent().getDataCollection();
  }

  getGrid(): MegaGrid {
    return this.getParent().getGrid();
  }

  getLayout(): MegaLayout {
    return this.getDataCollection().getLayout();
  }

  getMarginLeft(): number {
    return 0;
  }

  getParent(): IGridElement {
    return this._parent;
  }

  setParent(parent: IGridElement) {
    this._parent = parent;
  }

  isChild(ele: IGridElement): boolean {
    return this.getParent() === ele;
  }

  isDescendant(ele: IGridElement): boolean {
    if (this.isChild(ele)) {
      return true;
    } else {
      return this.getParent().isDescendant(ele);
    }
  }

  traversal(rows: MegaRowBase[]): void {
    // do nothing
  }

  public toString(): any {
    return this.Data;
  }
}
