import {SelectionType} from '../datamodel/Enums';
import {ISelectable} from '../datamodel/ISelectable';
import {Dictionary} from './IDictionary';

export class SelectionList {
  private _selectionType: SelectionType = SelectionType.Single;
  private _selection = new Dictionary<ISelectable>();

  get SelectionType(): SelectionType {
    return this._selectionType;
  }
  set SelectionType(selectionType: SelectionType) {
    this._selectionType = selectionType;
    this.Clear();
  }

  AddSelection(row: ISelectable): number {
    switch (this.SelectionType) {
      case SelectionType.Single:
        this._selection._values.forEach(r => r.Selected = false);
        this._selection.clear();
        row.Selected = true;
        this._selection.add('0', row);
        break;
      case SelectionType.MultiInList:
        // TODO: MultiInList
        throw new Error('Not Implemented');
        // break;
      case SelectionType.MultiGlobal:
        // TODO: MultiGlobal
        throw new Error('Not Implemented');
        // break;
    }

    return 0;
  }

  Clear() {
    this._selection.clear();
  }

  get Count(): number {
    const length = this._selection._keys.length;
    switch (this.SelectionType) {
      case SelectionType.Single:
        if (length > 1) {
          throw new Error('SelectionType: Single, but count > 1.');
        }
        return length;
      case SelectionType.MultiInList:
      case SelectionType.MultiGlobal:
        return length;
    }
  }
}
