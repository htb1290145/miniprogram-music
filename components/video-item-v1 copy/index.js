// components/video-item-v1/index.js
Page({
  // 父组件传递的数据
  properties: {
    item: {
      type: Object,
      value: {},
    },
    age: {
      type: Number,
      value: "默认值",
    },
  },
  /**
   * 页面的初始数据
   */
  data: {
    name: "htb",
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {},

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: () => {
    console.log(this.properties.item);
    console.log(1);
  },

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
  onPullDownRefresh() {
    console.log(this.properties.item);
    console.log(1);
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {},
});
