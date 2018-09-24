import { Component, Input, OnInit } from '@angular/core';
import {MegaColumn} from '../../datamodel/MegaColumn';
import {MegaLayout} from '../../datamodel/MegaLayout';
import {ColumnType} from '../../datamodel/Enums';

@Component({
  selector: 'app-column',
  templateUrl: './column.component.html',
  styleUrls: ['../../megagrid.component.less']
})
export class ColumnComponent implements OnInit {

  @Input() Layout: MegaLayout;
  @Input() ColumnIndex: number;
  @Input() Column: MegaColumn;
  columnType = ColumnType;
  constructor() {
  }

  ngOnInit() {
  }
}
