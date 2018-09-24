import {Input} from '@angular/core';
import {MegaLayout} from './MegaLayout';
import {IGridElement} from './IGridElement';
import {MegaCollection} from './MegaCollection';
import {MegaGrid} from './MegaGrid';
import {MegaRowBase} from './MegaRowBase';
import {U} from '../utilities/U';
import {MegaColumn} from './MegaColumn';

export class MegaCell implements IGridElement {
  @Input() Layout: MegaLayout = null;
  @Input() ColumnIndex: number;
  @Input() Column: MegaColumn = null;
  @Input() Row: any = null;
  @Input() Data: any = null;

  public IsSelected = false;
  public IsFocused = false;
  public Background = 'transparent';
  public Icon: any; // Sets or returns the icon of the cell, if OtColumnDefinition.CellsCanHaveIcons
  public Value: any;
  public Tooltip = '';
  public Tag: any;

  private _parent: IGridElement;

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
    if (U.notNullOrUndefined(this.Value == null)) {
      return '';
    } else if (this.getParent() == null) {
      return this.Value; // error
    } else {
      const layout = this.getLayout();
      if (U.notNullOrUndefined(layout)) {
        return this.Value; // error
      }

      // int index = ParentRow.Cells.IndexOf(this);
      // if (index < 0 || index >= layout.ColumnDefinitions.Count) {
      //   return this.Value;
      // } else {
      //   return GetCellText(layout.ColumnDefinitions[index]);
      // }
    }
  }
}
