import {MegaLayout} from './MegaLayout';
import {MegaGrid} from './MegaGrid';
import {MegaCollection} from './MegaCollection';
import {MegaRowBase} from './MegaRowBase';

export interface IGridElement {
  getGrid(): MegaGrid;
  getMarginLeft(): number;
  getLayout(): MegaLayout;
  getDataCollection(): MegaCollection;
  getParent(): IGridElement;
  setParent(parent: IGridElement);
  isChild(ele: IGridElement): boolean;
  isDescendant(ele: IGridElement): boolean;
  traversal(rows: MegaRowBase[]): void;
}
