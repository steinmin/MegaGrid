import {MegaRowBase} from './MegaRowBase';
import {IGridElement} from './IGridElement';
import {MegaGrid} from './MegaGrid';
import {MegaLayout} from './MegaLayout';
import * as _ from 'underscore';

export abstract class MegaCollection implements IGridElement {
  LayoutId = 0;
  ItemsSource: any[];
  IsLazyLoad = false;
  LookaheadRowCount = 0; // for data virtualizing, how many rows are required.
  RowsCount = 0; // Rows Count, if data virtualizing, this value will be setted by server.
  IsHighlighted = false; // draw a border to indicate, the current collection is dropping target by Darg&Drop.
  Tag: any = null;

  protected _parent: IGridElement;

  getDataCollection(): MegaCollection {
    return this;
  }

  getGrid(): MegaGrid {
    return this.getParent().getGrid();
  }

  getLayout(): MegaLayout {
    return _.first(this.getGrid().Layouts.filter(l => l.Id === this.LayoutId));
  }

  getMarginLeft(): number {
    return this.getParent().getMarginLeft();
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

  abstract traversal(rows: MegaRowBase[]): void;
}
