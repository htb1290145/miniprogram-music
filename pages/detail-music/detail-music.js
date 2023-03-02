// pages/detail-music/detail-music.js
Page({
  /**
   * 页面的初始数据
   */
  data: {},

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    // options中 是通过url中query参数传递的
    console.log(options.musicId);

    // 页面间的通信接口
    // on监听事件，获取上一页面 通过 eventChannel 传送到当前页面的数据
    // const eventChannel = this.getOpenerEventChannel();
    // eventChannel.on("getMusicId", function (musicId) {
    //   console.log(musicId);
    // });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {},

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {},

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {},

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {},
});
