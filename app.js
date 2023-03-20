// app.js
App({
  globalData: {
    srceenWidth: 0,
    srceenHeight: 0,
    statusBarHeight: 0,
    audioContext: 0,
  },
  onLaunch: function () {
    const info = wx.getSystemInfoSync();
    this.globalData.srceenWidth = info.windowWidth;
    this.globalData.srceenHeight = info.windowHeight;
    this.globalData.statusBarHeight = info.statusBarHeight;
    const audioContext = wx.createInnerAudioContext();
    this.globalData.audioContext = audioContext;
  },
});
