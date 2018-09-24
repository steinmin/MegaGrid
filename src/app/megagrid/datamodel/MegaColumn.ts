import {MegaLayout} from './MegaLayout';
import {ColumnType, SortType} from './Enums';

export class MegaColumn implements MegaColumn {
  public ParentLayout: MegaLayout;
  public Title: string;
  public SortType = SortType.None; // null: unsortable, 0: not sorted, 1: Asc, -1: Desc
  public ColumnType: ColumnType = ColumnType.Normal;
  public Id: number;
  public SortingOrderPreference = 0;
  public AllowEditing = false;
  public AllowFiltering = true;
  public AllowSorting = true;
  public AllowGrouping = false;
  public AllowIncrementalSearch = false;
  public AllowAsInfoRow = true;
  public AllowIcon = true;
  public AllowTimeVisible = false;
  // public DataType: Type;
  // public Editor : Type;
  public DefaultValue: any;

  // public Filter: IFilter;
  public ColumnHeaderIcon: string;
  public HasCurrencySymbol = false;
  public HasEditButton = false;
  public HasClearButton = false;
  public HasThousandSeperator = false;
  public IsVisible = true;
  public IsInfoRow = false;

  public InfoRowLines = 2;
  public FieldName: string;
  public IconFieldName: string;
  public TextAlignment: number;
  public TextDecorations: string;
  public Width: string;
  public Background: 'transparent';

  constructor(id: number, title: string, fieldName: string, width: string, columnType: ColumnType = ColumnType.Normal) {
    this.Id = id;
    this.Title = title;
    this.FieldName = fieldName;
    this.Width = width;
    this.ColumnType = columnType;
  }
}
