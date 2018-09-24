import {MegaGrid} from './MegaGrid';
import {IGridElement} from './IGridElement';
import {MegaCollection} from './MegaCollection';
import {MegaLayout} from './MegaLayout';
import {RowType} from './Enums';

export abstract class MegaRowBase implements IGridElement {
  public Index: number;
  public Data: any;
  private _parent: IGridElement;

  getGrid(): MegaGrid {
    return this.getParent().getGrid();
  }

  abstract getMarginLeft(): number;

  getLayout(): MegaLayout {
    return this.getDataCollection().getLayout();
  }

  getDataCollection(): MegaCollection {
    return this.getParent().getDataCollection();
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
  abstract get type(): RowType;
}

