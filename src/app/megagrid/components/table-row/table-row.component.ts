import {Component, Input, OnInit} from '@angular/core';
import {MegaRow} from '../../datamodel/MegaRow';
import {MegaLayout} from '../../datamodel/MegaLayout';
import {U} from '../../utilities/U';

@Component({
  selector: 'app-table-row',
  templateUrl: './table-row.component.html',
  styleUrls: ['../../megagrid.component.less']
})
export class TableRowComponent implements OnInit {
  @Input() Row: MegaRow;
  @Input() Layout: MegaLayout;
  @Input() Index = 0;

  constructor() { }

  ngOnInit() {
  }

}
