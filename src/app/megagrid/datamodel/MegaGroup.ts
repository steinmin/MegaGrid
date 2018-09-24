import {MegaRowBase} from './MegaRowBase';
import {RowType} from './Enums';

export class MegaGroup extends MegaRowBase {
  getMarginLeft(): number {
    return 0;
  }

  traversal(rows: MegaRowBase[]): void {
  }

  get type(): RowType {
    return RowType.GroupHeader;
  }
}
