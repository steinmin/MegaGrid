import {Component, Input, OnInit} from '@angular/core';
import {MegaLayout} from '../../datamodel/MegaLayout';
import {ColumnType} from '../../datamodel/Enums';
import {U} from '../../utilities/U';
import {MegaColumnHeader} from '../../datamodel/MegaColumnHeader';

@Component({
  selector: 'app-column-header',
  templateUrl: './column-header.component.html',
  styleUrls: ['../../megagrid.component.less']
})
export class ColumnHeaderComponent implements OnInit {
  @Input() ColumnHeader: MegaColumnHeader;
  @Input() Layout: MegaLayout;
  @Input() Index = 0;
  columnType = ColumnType;
  constructor() { }

  ngOnInit() {
  }
}
