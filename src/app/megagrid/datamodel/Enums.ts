export enum ColumnType {
  Normal,
  Mark,
  Checkbox,
  Expander
}

export enum RowType {
  TableRow = 0,
  TreeRow = 1,
  ColumnHeader = 2,
  GroupHeader = 3,
  DetailHeader = 4
}

export enum DragDropMode {
  Disable,
  InList,
  BetweenList
}

export enum  SortType {
  None= 0,
  Asce = 1,
  Desc = -1
}

export enum SelectionType {
  Single,
  MultiInList,
  MultiGlobal
}

// Specifies the standard menu items that shall be suppressed.
export enum StandardMenuItem {
  None = 0,
  Sort = 1,
  Group = 2,
  Filter = 4,
  InfoRow = 8,
  RestoreDefault = 16
}

// This field is an output field and must be set by the event handler,
// if necessary. editorType indicates the type of editor that shall be used.
// Default – Edit according to the rules described in “2.15.1: Determining
//     the Editor for the Cell”.
// DropDownList – Edit using a drop-down list, in the same way as if OtColumnDefinition.
//     EditUsingDropDownList were true. The event NeedDropDownList will be raised before
//     displaying the drop-down list.
// Custom – The editor specified in the field editor is used.
export enum EditorType {
  Default = 0,
  DropDownList = 1,
  Custom = 2
}

// BlankArea – the blank area after all rows was hit.
// ColumnHeader – a column header was hit.
// DetailsHeader – a details header was hit.
// GroupHeader – a group header was hit.
// Row – a row was hit.
export enum HitLocation {
  BlankArea,
  ColumnHeader,
  DetailsHeader,
  GroupHeader,
  Row,
  HorizontalScrollBar,
  VerticalScrollBar
}

// ColumnHeader – context menu for column header.
// GroupHeader – context menu for group header.
export enum ContextMenuType {
  ColumnHeader,
  GroupHeader
}

// Display – Send NeedData event for Display purpose.
// Selection – Send NeedData event for Selection purpose.
// Don't need detail cell values in the returned rows.
export enum NeedDataContext {
  Display,
  Selection
}

// Disallowed – Don't allow the drag and drop operation of the OtRow.
// WithinSameCollection – Drag and drop operation occurs only in the same data collection.
// ToAnotherCollection –  Drag and drop operation occurs between the different collections.
export enum DragAndDropMode {
  Disallowed,
  WithinSameCollection,
  ToAnotherCollection
}
