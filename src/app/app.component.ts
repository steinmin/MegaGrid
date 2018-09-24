import { Component, OnInit } from '@angular/core';
import { MegaColumn } from './megagrid/datamodel/MegaColumn';
import {ColumnType, SelectionType} from './megagrid/datamodel/Enums';
import { MegaCollectionTable } from './megagrid/datamodel/MegaCollectionTable';
import { MegaLayout } from './megagrid/datamodel/MegaLayout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  selectionType = SelectionType;
  testDaten = [
    {
      name: 'CPU',
      count: 15,
      price: 10.5
    },
    {
      name: 'Memory',
      count: 10,
      price: 17.5
    },
    {
      name: 'Power',
      count: 5,
      price: 7.3
    },
    {
      name: 'Hard Disk',
      count: 2,
      price: 55.50
    },
    {
      name: 'Grafik Karte',
      count: 5,
      price: 22.72
    },
    {
      name: 'Keyboard',
      count: 10,
      price: 3.33
    },
    {
      name: 'Maus',
      count: 9,
      price: 9.0
    },
    ];

  testDataCollection = new MegaCollectionTable();
  testLayout = new MegaLayout();
  layouts = [this.testLayout];

  constructor() {
    this.testLayout.Id = 15;
    this.testLayout.Columns = [
      new MegaColumn(0, '', '', '25px', ColumnType.Mark),
      new MegaColumn(1, '', '', '25px', ColumnType.Checkbox),
      new MegaColumn(2, '', '', '25px', ColumnType.Expander),
      new MegaColumn(3, 'Name', 'name', '150px') ,
      new MegaColumn(4, 'Count', 'count', '100px'),
      new MegaColumn(5, 'Price', 'price', '200px'),
    ];
    this.testLayout.ColumnOrder = [0, 2, 1];

    this.testDataCollection.LayoutId = 15;
    this.testDataCollection.ItemsSource = this.testDaten;
  }
  ngOnInit() {
  }
}
