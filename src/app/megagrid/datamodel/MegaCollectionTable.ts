import {MegaCollection} from './MegaCollection';
import {MegaRowBase} from './MegaRowBase';
import {U} from '../utilities/U';
import {MegaRow} from './MegaRow';
import {MegaGroup} from './MegaGroup';
import {MegaColumnHeader} from './MegaColumnHeader';

export class MegaCollectionTable extends MegaCollection {
  public ShowExpander = true;
  public ShowRowHeader = true;
  private InsertionRow: MegaRow;
  private GroupHeaders: MegaGroup[];
  constructor() {
    super();
  }

  traversal(rows: MegaRowBase[]) {
    if (this.getLayout().ShowColumnHeader && this.getParent() !== this.getGrid()) {
      const row = new MegaColumnHeader();
      row.setParent(this);
      rows.push(row);
    }

    if (U.notNullOrUndefined(this.InsertionRow)) {
      rows.push(this.InsertionRow);
    }

    if (U.notEmpty(this.GroupHeaders)) {
      // add MegaGroup
    } else {
      if (this.IsLazyLoad) {
        throw new Error('lazy loading is not implemented.');
      } else if (U.notEmpty(this.ItemsSource)) {
        for (let i = 0; i < this.ItemsSource.length; i++) {
          const row = new MegaRow(i, this.ItemsSource[i]);
          row.setParent(this);
          rows.push(row);
        }
      }
    }
  }
}
