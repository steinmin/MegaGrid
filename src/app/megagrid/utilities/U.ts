export class U {
  public static notNullOrUndefined(obj: any): boolean {
    return obj != null && obj !== null && typeof obj !== 'undefined';
    // return !_.isNull(obj) && !_.isNaN(obj);
  }

  public static notEmpty(obj: any): boolean {
    return U.notNullOrUndefined(obj) && obj.length > 0; // !_.isEmpty(obj);
  }
}

