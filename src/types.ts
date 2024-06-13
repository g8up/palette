export interface IColors {
  val: string;
  name?: string;
}

/** 调色盘 */
type Palette = IColors[];

export interface IGroup {
  name: string;
  palettes: Palette[];
}

export interface IFormat {
  /** RGB 格式 */
  isRGB: boolean;
  /** rgb 颜色格式是否带括号： rgb() */
  isRGBWithBracket: boolean;
  /** 复制时是否带# */
  copyWithSharp: boolean;
  /** 是否大写 */
  isUppercase: boolean;
}