interface IColors {
  val: string;
  name?: string;
}

/** 调色盘 */
type Palette = IColors[];

export interface IGroup {
  name: string;
  palettes: Palette[];
}
