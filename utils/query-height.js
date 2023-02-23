export function queryHeight(selector) {
  // 通过promise返回获取的高度
  return new Promise((resolve) => {
    const query = wx.createSelectorQuery();
    query.select(selector).boundingClientRect();
    // query.exec(resolve);
    query.exec((res) => {
      resolve(res);
    });
  });
}
