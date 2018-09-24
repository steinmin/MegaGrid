import { Component, OnInit } from '@angular/core';
import {MegaGrid} from './datamodel/MegaGrid';
import {RowType} from './datamodel/Enums';

@Component({
  selector: 'app-mega-grid',
  templateUrl: './megagrid.component.html',
  styleUrls: ['./megagrid.component.less']
})
export class MegaGridComponent extends MegaGrid implements OnInit {
  rowType = RowType;
  constructor() {
    super();
  }

  ngOnInit() {
    this.traversal([]);
  }
}
