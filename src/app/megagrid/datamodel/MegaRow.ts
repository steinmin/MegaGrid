import {MegaRowBase} from './MegaRowBase';
import {MegaCollectionTable} from './MegaCollectionTable';
import {RowType} from './Enums';
import {ISelectable} from './ISelectable';

export class MegaRow extends MegaRowBase implements ISelectable {
  Selected = false;
  constructor(index: number, targetObject: any) {
    super();
    this.Index = index;
    this.Data = targetObject;
  }

  traversal(rows: MegaRowBase[]): void {
  }

  get type(): RowType {
    return RowType.TableRow;
  }

  getMarginLeft(): number {
    return this.getParent().getMarginLeft()
    + ((<MegaCollectionTable>this.getDataCollection()).ShowRowHeader ? 25 : 0)
    + ((<MegaCollectionTable>this.getDataCollection()).ShowExpander ? 25 : 0);
  }
}
