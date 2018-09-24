import {Injectable} from '@angular/core';
import {MegaColumn} from './MegaColumn';

@Injectable()
export class LayoutProvider {
  private static _instance: LayoutProvider = null;
  public static _layoutDefinitionsFilePath = null;
  private constructor() {}
  public static get Instance() {
    if (LayoutProvider._instance === null) {
      LayoutProvider._instance = new LayoutProvider();
    }
    return LayoutProvider._instance;
  }

  getColumnDefinition(layoutId: number, index: number): MegaColumn {
    return null;
  }
}
