import {MegaRowBase} from './MegaRowBase';
import {IGridElement} from './IGridElement';
import {MegaGrid} from './MegaGrid';
import {MegaLayout} from './MegaLayout';
import {MegaCollection} from './MegaCollection';
import {RowType} from './Enums';

export class MegaColumnHeader extends MegaRowBase {
  getMarginLeft(): number {
    return 0;
  }

  traversal(rows: MegaRowBase[]): void {
  }

  get type(): RowType {
    return RowType.ColumnHeader;
  }
}
