// 根据换行符\n切分歌词
// 正则表达式
const tiemRegExp = /^\[(\d{2}):(\d{2})\.(\d{2,3})\]/;

// 利用cuurentTime匹配歌词
export function getLyric(lyricString) {
  let lyricInfo = [];
  // 歌词数组
  const lyricArr = lyricString.split("\n");
  // [00:11.660]分开了的位置被替代
  for (const lineLyric of lyricArr) {
    // 1.获取时间——1、字符串截图；2、正则表达式
    // const m = lineLyric.split(":")[0].split("[")[1];
    const timeResult = tiemRegExp.exec(lineLyric);
    if (!timeResult) continue;
    // 获取分秒毫秒并转化成毫秒，相加
    const m = timeResult[1] * 60 * 1000;
    const s = timeResult[2] * 1000;
    const ms =
      timeResult[3].length === 2 ? timeResult[3] * 10 : timeResult[3] * 1;
    const time = m + s + ms;

    // 2.获取文字
    const lyricText = lineLyric.replace(tiemRegExp, "");

    // 3.组成对象
    const lyricObj = { time, lyricText };

    // 4.添加进数组
    lyricInfo.push(lyricObj);
  }
  return lyricInfo;
}
