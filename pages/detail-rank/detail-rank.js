// pages/detail-rank/detail-rank.js
import { rankStore } from "../../store/index";

Page({
  /**
   * 页面的初始数据
   */
  data: {
    playlist: {},
    isShowRankHeader: {
      type: Boolean,
      value: true,
    },
    isShowRankName: {
      type: Boolean,
      value: true,
    },
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    let _this = this;
    // 监听home-music传递来的数据
    const id = options.id;
    if (options.type === "rank") {
      const eventChannel = this.getOpenerEventChannel();
      eventChannel.on("openToHotRank", function (data) {
        _this.setData({ isShowRankHeader: data });
      });
      eventChannel.on("openToRank", function (data) {
        _this.setData({ isShowRankHeader: data });
      });
      this.getListdata(id);
    } else {
      // 歌单——显示头部
      const eventChannel = this.getOpenerEventChannel();
      eventChannel.on("openToMenu", function (data) {
        _this.setData({ isShowRankHeader: data });
      });
      this.getListdata(id);
    }
  },
  getListdata(id) {
    // 显示头部与显示榜单名互斥
    this.setData({ isShowRankName: !this.data.isShowRankHeader });
    rankStore.dispatch("getPlayListDetailAction", id);
    rankStore.onState("playlist", (value) => {
      this.setData({ playlist: value });
    });
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
