// app.js
App({
  globalData: {
    srceenWidth: 0,
    srceenHeight: 0,
  },
  onLaunch: function () {
    const info = wx.getSystemInfoSync();
    this.globalData.srceenWidth = info.windowWidth;
    this.globalData.srceenHeight = info.windowHeight;
  },
});
