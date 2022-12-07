// pages/home-video/index.js
import { getTopMV } from "../../service/api_video";

Page({
  /**
   * 页面的初始数据
   */
  data: {
    topMVs: [],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: async function (options) {
    const res = await getTopMV(0);
    this.setData({ topMVs: res.data });
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
  // handleClick: function (event) {
  //   console.log("handleClick");
  //   console.log(event);
  // },
  handleClick: function (event) {
    // 获取id
    // const id = event.currentTarget.dataset.item.id;
    // console.log(id);
    console.log(event);
  },
});
