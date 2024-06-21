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

/**
 * 通知
 * https://developer.mozilla.org/zh-CN/docs/Web/API/notification
 * new Notification('Title', {body: 'Hello'});
 */
export const notify = (title: string, body: string) => {
  // 先检查浏览器是否支持
  if (!('Notification' in window)) {
    console.log('This browser does not support desktop notification');
  }

  // 检查用户是否同意接受通知
  else if (Notification.permission === 'granted') {
    // If it's okay let's create a notification
    new Notification(title, { body });
  }

  // 否则我们需要向用户获取权限
  else if (Notification.permission !== 'denied') {
    Notification.requestPermission().then(function (permission) {
      // 如果用户接受权限，我们就可以发起一条消息
      if (permission === 'granted') {
        new Notification(title, { body });
      }
    });
  }
};