import {Input} from '@angular/core';
import {MegaLayout} from './MegaLayout';
import {MegaCollection} from './MegaCollection';
import {IGridElement} from './IGridElement';
import {SelectionType} from './Enums';
import {from} from 'rxjs/index';
import {U} from '../utilities/U';
import {MegaRowBase} from './MegaRowBase';
import {MegaColumnHeader} from './MegaColumnHeader';
import {MegaCollectionTable} from './MegaCollectionTable';
import {SelectionList} from '../utilities/SelectionList';

export class MegaGrid implements IGridElement {
  protected _rows: MegaRowBase[] = null;
  protected _mainColumnHeader: MegaColumnHeader = null;

  get SelectionType(): SelectionType {
    return this.Selection.SelectionType;
  }
  @Input() set SelectionType(selectionType: SelectionType) {
    this.Selection.SelectionType = selectionType;
  }

  private _selection: SelectionList = new SelectionList();
  public get Selection() {
    return this._selection;
  }

  private _layouts: MegaLayout[] = [];
  get Layouts(): MegaLayout[] {
    return this._layouts;
  }
  @Input() set Layouts(layouts: MegaLayout[]) {
    this._layouts = U.notNullOrUndefined(layouts) ? layouts : [];
    from<MegaLayout>(this._layouts).subscribe(l => l.RootGrid = this);
  }

  private _dataCollection: MegaCollection;
  get DataCollection(): MegaCollection {
    return this._dataCollection;
  }
  @Input() set DataCollection(dataCollection: MegaCollection) {
    this._dataCollection = dataCollection;
    this._dataCollection.setParent(this);
  }

  getGrid(): MegaGrid {
    return this;
  }

  getMarginLeft(): number {
    return 0;
  }

  getLayout(): MegaLayout {
    return null;
  }

  getDataCollection(): MegaCollection {
    return null;
  }

  getParent(): IGridElement {
    return null;
  }

  setParent(parent: IGridElement) {
    // do nothing.
  }

  isChild(ele: IGridElement): boolean {
    return false;
  }

  isDescendant(ele: IGridElement): boolean {
    return false;
  }

  traversal(rows: MegaRowBase[]): void {
    if (U.notNullOrUndefined(this.DataCollection) && this.DataCollection instanceof MegaCollectionTable) {
      const table = this.DataCollection as MegaCollectionTable;
      if (table.getLayout().ShowColumnHeader) {
        this._mainColumnHeader = new MegaColumnHeader();
        this._mainColumnHeader.setParent(table);
      }
    }


    this._rows = U.notNullOrUndefined(rows) ? rows : [];
    this.DataCollection.traversal(this._rows);
  }
}
