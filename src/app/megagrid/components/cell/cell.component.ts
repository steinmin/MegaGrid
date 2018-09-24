import {Component, Input, OnInit} from '@angular/core';
import {MegaLayout} from '../../datamodel/MegaLayout';
import {MegaColumn} from '../../datamodel/MegaColumn';
import {ColumnType} from '../../datamodel/Enums';

@Component({
  selector: 'app-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['../../megagrid.component.less', '../../../css/expander.less']
})
export class CellComponent implements OnInit {
  @Input() Layout: MegaLayout = null;
  @Input() ColumnIndex: number;
  @Input() Column: MegaColumn = null;
  @Input() Row: any = null;
  @Input() Data: any = null;

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
