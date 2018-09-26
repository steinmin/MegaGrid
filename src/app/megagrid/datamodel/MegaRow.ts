import {MegaRowBase} from './MegaRowBase';
import {MegaCollectionTable} from './MegaCollectionTable';
import {RowType} from './Enums';
import {ISelectable} from './ISelectable';
import {IGridElement} from './IGridElement';
import {Dictionary} from '../utilities/IDictionary';
import {MegaCell} from './MegaCell';

export class MegaRow extends MegaRowBase implements ISelectable {
  Selected = false;
  Cells: Dictionary<MegaCell> = new Dictionary();
  constructor(index: number, parent: IGridElement, targetObject: any) {
    super();
    this.setParent(parent);
    this.Index = index;
    this.Data = targetObject;
    this.createCells();
  }

  createCells() {
    this.Cells.clear();
    const layout = this.getLayout();
    this.getLayout().Columns.forEach(col => this.Cells.add(col.Id, new MegaCell(this, col)));
  }

  getCell(id: number) {
    if (this.Cells.containsKey(id)) {
      return this.Cells[id.toString()];
    }

    throw new Error('Cell is not exist: ' + this.Data.toString());
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
