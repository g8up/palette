/** 颜色转换 hex 转 rgb */
export const hexToRgb = (hex: string, withBracket = true) => {
  // 确保输入是一个有效的十六进制颜色代码
  if (!/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(hex)) {
    throw new Error('Invalid hex color code.');
  }

  // 移除开头的#字符
  hex = hex.substring(1);

  // 如果是简写的颜色代码（如#009），则转换为#000099
  if (hex.length === 3) {
    hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
  }

  // 将颜色代码拆分为红、绿、蓝三个部分
  var r = parseInt(hex.substring(0, 2), 16);
  var g = parseInt(hex.substring(2, 4), 16);
  var b = parseInt(hex.substring(4, 6), 16);

  // 返回RGB格式的颜色
  if (withBracket) {
    return 'rgb(' + r + ', ' + g + ', ' + b + ')';
  }
  return [r, g, b].join(',');
}

// 使用示例
// console.log(hexToRgb('#0099CC'));  // 输出: rgb(0, 153, 204)