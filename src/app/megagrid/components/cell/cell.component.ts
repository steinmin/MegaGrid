import {Component, Input, OnInit} from '@angular/core';
import {MegaLayout} from '../../datamodel/MegaLayout';
import {MegaColumn} from '../../datamodel/MegaColumn';
import {ColumnType} from '../../datamodel/Enums';
import {MegaCell} from '../../datamodel/MegaCell';

@Component({
  selector: 'app-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['../../megagrid.component.less', '../../../css/expander.less']
})
export class CellComponent implements OnInit {
  @Input() Cell: MegaCell = null;

  columnType = ColumnType;

  constructor() { }

  ngOnInit() {
  }

  private setFocusOnInput() {
    setTimeout(() => {
      const target = <any>document.getElementById('targetName');
      if (target) {
        target.focus();
      }
    }, 100);
  }

  onClick() {

  }
  // protected getElement(id: string): any {
  //   return <any>document.getElementById(id);
  // }
}
