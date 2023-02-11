// pages/home-video/index.js
import { getTopMV } from "../../service/api_video";

Page({
  /**
   * 页面的初始数据
   */
  data: {
    topMVs: [],
    // 是否还有更多数据
    hasMore: true,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: async function (options) {
    try {
      this.getTopMVData(0);
    } catch (err) {
      console.log(err);
    }
  },

  // 请求首页视频数据函数
  async getTopMVData(offset) {
    // 判断是否可以请求
    if (!this.data.hasMore && offset !== 0) return;

    // 加载展示动画
    wx.showNavigationBarLoading();

    // 请求数据
    const res = await getTopMV(offset);
    // 非拼接——页面第一次生成 和 下拉刷新
    let newData = this.data.topMVs;
    if (offset === 0) {
      newData = res.data;
    } else {
      // 新旧数据拼接——页面到达底部加载更多数据
      newData = newData.concat(res.data);
    }

    // 设置数据
    this.setData({ topMVs: newData });
    this.setData({ hasMore: res.hasMore });

    // 移除展示动画
    wx.hideNavigationBarLoading();
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  async onReachBottom() {
    // hasMore = fasle 不再发送网络请求
    if (!this.data.hasMore) return;
    // 上拉加载更多数据
    this.getTopMVData(this.data.topMVs.length);
  },
  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  async onPullDownRefresh() {
    // 下拉刷新，重新请求首页数据
    this.getTopMVData(0);
  },
  // 点击视频 —— 进入视频详情页
  handleClick: async function (event) {
    const id = event.currentTarget.dataset.item.id;

    // 跳转页面
    wx.navigateTo({
      url: `/pages/detail-video/detail-video?mvid=${id}`,
      events: {},
      success: function (res) {},
    });
  },
});
